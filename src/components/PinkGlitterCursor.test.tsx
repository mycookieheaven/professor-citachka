import { render, fireEvent, cleanup } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { PinkGlitterCursor } from './PinkGlitterCursor';

afterEach(() => { cleanup(); vi.unstubAllGlobals(); delete document.documentElement.dataset.motion; });
it('keeps the pixel cookie cursor available on cookieheaven in Calm mode',()=>{media();const {container}=render(<PinkGlitterCursor/>);fireEvent.pointerMove(window,{clientX:80,clientY:90});document.documentElement.dataset.motion='calm';fireEvent(window,new Event('citachka-atmosphere-change'));expect(container.querySelector('.pink-glitter-cursor')).toHaveClass('pixel-cookie-cursor');expect(container.querySelector('.pixel-cursor-cookie')).not.toBeNull();document.documentElement.dataset.motion='lively';fireEvent(window,new Event('citachka-atmosphere-change'));expect(container.querySelector('.pink-glitter-cursor')).toHaveAttribute('data-active','false');});
function media(reduced = false, fine = true) {
 vi.stubGlobal('matchMedia', vi.fn((query: string) => ({matches: query.includes('pointer') ? fine : reduced, addEventListener: vi.fn(), removeEventListener: vi.fn()})));
}
it('replaces the native cursor only while the custom cursor has a position', () => {
 media();
 const { container, unmount } = render(<PinkGlitterCursor />);
 const cursor = container.querySelector('.pink-glitter-cursor');
 expect(cursor).toHaveAttribute('data-active', 'false');
 fireEvent.pointerMove(window, { clientX: 80, clientY: 90 });
 expect(cursor).toHaveAttribute('data-active', 'true');
 fireEvent.mouseLeave(document.documentElement);
 expect(cursor).toHaveAttribute('data-active', 'false');
 unmount();
 expect(document.querySelector('.pink-glitter-cursor[data-active="true"]')).toBeNull();
});
it.each([[true,true],[false,false]])('preserves native cursor for reduced motion or coarse input (%s %s)', (reduced, fine) => {
 media(reduced, fine);
 const { container } = render(<PinkGlitterCursor />);
 expect(container.querySelector('.pink-glitter-cursor')).toBeNull();
});
