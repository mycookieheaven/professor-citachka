import {render,screen,act,cleanup,fireEvent} from '@testing-library/react';
import {it,expect,vi,afterEach} from 'vitest';
import {SubjectProgress,StorageNotice} from './Learning';
import {recordPosition,recordStudy} from '@/lib/study-store';
import {PronunciationControls} from './PronunciationControls';
afterEach(()=>{cleanup();vi.restoreAllMocks();recordStudy('test-reset','reset');localStorage.clear();});
it('resumes the exact next extended lesson without replacing new-path completion',()=>{
 localStorage.clear();act(()=>{recordStudy('finance','legacy:cash-flow-basics');recordPosition('finance','legacy:debt-interest-and-risk');});render(<SubjectProgress subject="finance"/>);
 expect(screen.getByRole('link',{name:/Continue extended Finance/})).toHaveAttribute('href','/subjects/finance/debt-interest-and-risk');expect(screen.getByRole('progressbar')).toHaveAttribute('value','0');
 expect(screen.getByText(/1 study interactions/)).toBeVisible();
});
it('keeps unsaved progress in memory and reports the storage limitation',()=>{
 localStorage.clear();render(<><SubjectProgress subject="finance"/><StorageNotice/></>);
 vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw new Error('quota');});
 act(()=>{recordStudy('finance','01');});expect(screen.getByRole('progressbar')).toHaveAttribute('value','1');expect(screen.getByText(/Storage is unavailable/)).toBeVisible();
});
it('gives a useful notice when speech playback is unsupported',()=>{
 render(<PronunciationControls russian="Привет" latin="pree-VYET"/>);fireEvent.click(screen.getByRole('button',{name:/Play slow/}));
 expect(screen.getByText(/Pronunciation playback is unavailable/)).toBeVisible();
});
