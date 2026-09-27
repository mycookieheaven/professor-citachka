import {render,screen} from '@testing-library/react';
import {BrandMark,QuoteBanner} from './Brand';
import manifest from '@/app/manifest';
it('separates scholarly woman brand from supplied panda app icons',()=>{
 const {container}=render(<><BrandMark/><QuoteBanner/></>);
 expect(container.querySelector('svg[data-brand="reader"]')).toHaveAttribute('aria-hidden','true');
 expect(container.querySelector('[data-glasses]')).toBeInTheDocument();
 expect(container.querySelector('[data-book]')).toBeInTheDocument();
 expect(screen.queryByText('PC')).not.toBeInTheDocument();
 expect(screen.getByText(`"I'm usually loved by the world" - Melissa 2026`)).toBeVisible();
 expect(manifest().icons).toEqual(expect.arrayContaining([expect.objectContaining({src:'/icons/panda-192.png',sizes:'192x192'}),expect.objectContaining({src:'/icons/panda-maskable-512.png',purpose:'maskable'})]));
});
