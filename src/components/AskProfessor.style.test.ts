import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';

it('uses the same readable ink for the Ask Professor title and introductory text', () => {
  const css = readFileSync('src/components/AskProfessor.module.css', 'utf8');
  expect(css).toMatch(/\.title\s*\{[^}]*color:\s*#6d0f3d;/);
  expect(css).toMatch(/\.lede\s*\{[^}]*color:\s*#6d0f3d;/);
});
