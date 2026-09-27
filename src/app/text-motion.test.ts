import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
it('provides sitewide hover text animation with motion and pointer guards', () => {
 const css = readFileSync('src/app/learning.css', 'utf8');
 expect(css).toContain('@keyframes text-hover-glow');
 expect(css).toContain('@keyframes text-hover-lift');
 expect(css).toContain('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
 expect(css).toContain(':not(:disabled)');
 expect(css).toContain('animation:none!important');
});
