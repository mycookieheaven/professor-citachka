import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AudiobookPlayer } from "./AudiobookPlayer";
import recordings from "./recordings.json";

const props = { id: "jane-eyre", title: "Jane Eyre", recording: recordings["jane-eyre"] };
const mount = () => { const view = render(<AudiobookPlayer {...props} />); return { ...view, audio: document.querySelector('audio')! }; };
beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
});
afterEach(() => { vi.restoreAllMocks(); document.querySelectorAll('body > audio').forEach(element => element.remove()); });

it('reports failed storage and keeps session-only listening usable', () => {
  vi.spyOn(localStorage, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
  const { audio } = mount();
  fireEvent.change(screen.getByLabelText('Jane Eyre chapter'), { target: { value: '1' } });
  expect(screen.getByText(/position could not be saved/i)).toBeVisible();
  expect(audio.src).toBe(props.recording.chapters[1].url);
});

it('shows loading, handles playback rejection and retries without leaving the site', async () => {
  vi.mocked(HTMLMediaElement.prototype.play).mockRejectedValueOnce(new Error('network'));
  const { audio } = mount();
  fireEvent.click(screen.getByRole('button', { name: 'Play Jane Eyre' }));
  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/could not play/i));
  fireEvent.click(screen.getByRole('button', { name: 'Retry audio' }));
  expect(audio.load).toHaveBeenCalled();
  fireEvent.waiting(audio);
  expect(screen.getByText(/loading audio/i)).toBeVisible();
  fireEvent.error(audio);
  expect(screen.getByRole('alert')).toHaveTextContent(/could not play/i);
  expect(document.querySelector('a')).toBeNull();
});

it('pauses another book when playback starts and offers the next chapter at the end', () => {
  const { audio } = mount();
  const other = document.createElement('audio');
  document.body.append(other);
  const pause = vi.spyOn(other, 'pause');
  fireEvent.play(audio);
  expect(pause).toHaveBeenCalled();
  fireEvent.ended(audio);
  fireEvent.click(screen.getByRole('button', { name: 'Next chapter' }));
  expect(audio.src).toBe(props.recording.chapters[1].url);
  other.remove();
});

it.each(['{broken', JSON.stringify({ recording: props.recording.archiveId, chapter: 999, position: -1, speed: 77 })])('ignores invalid saved audio: %s', saved => {
  localStorage.setItem('citachka-audio-jane-eyre-v1', saved);
  const { audio } = mount();
  expect(audio.src).toBe(props.recording.chapters[0].url);
});

it('restores a separately saved chapter, position and speed without autoplay', async () => {
  const { audio, unmount } = mount();
  fireEvent.change(screen.getByLabelText('Jane Eyre chapter'), { target: { value: '2' } });
  Object.defineProperty(audio, 'duration', { configurable: true, value: 900 });
  fireEvent.loadedMetadata(audio);
  fireEvent.change(screen.getByLabelText('Jane Eyre playback speed'), { target: { value: '1.25' } });
  audio.currentTime = 123;
  fireEvent.timeUpdate(audio);
  unmount();
  const restored = mount().audio;
  await waitFor(() => expect(screen.getByLabelText('Jane Eyre chapter')).toHaveValue('2'));
  Object.defineProperty(restored, 'duration', { configurable: true, value: 900 });
  fireEvent.loadedMetadata(restored);
  expect(restored.currentTime).toBe(123);
  expect(restored.playbackRate).toBe(1.25);
  expect(restored.play).not.toHaveBeenCalled();
  expect(localStorage.getItem('citachka-audio-pride-and-prejudice-v1')).toBeNull();
});

it('plays on site with large explicit play, seek and speed controls and chapter selection', async () => {
  const { audio } = mount();
  expect(audio.preload).toBe('none');
  fireEvent.click(screen.getByRole('button', { name: 'Play Jane Eyre' }));
  expect(audio.play).toHaveBeenCalled();
  Object.defineProperty(audio, 'duration', { configurable: true, value: 800 });
  fireEvent.loadedMetadata(audio);
  audio.currentTime = 40;
  fireEvent.timeUpdate(audio);
  fireEvent.click(screen.getByRole('button', { name: 'Back 15 seconds' }));
  expect(audio.currentTime).toBe(25);
  fireEvent.click(screen.getByRole('button', { name: 'Forward 15 seconds' }));
  expect(audio.currentTime).toBe(40);
  fireEvent.change(screen.getByLabelText('Jane Eyre playback speed'), { target: { value: '1.5' } });
  expect(audio.playbackRate).toBe(1.5);
  fireEvent.change(screen.getByLabelText('Jane Eyre playback position'), { target: { value: '100' } });
  expect(audio.currentTime).toBe(100);
  fireEvent.change(screen.getByLabelText('Jane Eyre chapter'), { target: { value: '1' } });
  await waitFor(() => expect(audio.src).toBe(props.recording.chapters[1].url));
  expect(audio.pause).toHaveBeenCalled();
  fireEvent.loadedMetadata(audio);
  expect(audio.currentTime).toBe(0);
  expect(audio.playbackRate).toBe(1.5);
});
