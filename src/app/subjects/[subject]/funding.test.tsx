import {expect,it,vi} from 'vitest';
vi.mock('next/navigation',()=>({notFound:()=>{throw new Error('404: department not found');},useRouter:()=>({push:vi.fn()})}));
import {render,screen} from '@testing-library/react';
import Page from './page';
it('serves the authored funding department with honest scope, progression and a saved continue link',async()=>{
 render(await Page({params:Promise.resolve({subject:'business-funding'})}));
 expect(screen.getByRole('heading',{name:'Business Funding & Sales'})).toBeVisible();
 expect(screen.getByText(/Published now: 14 of 100 requested core units/)).toBeVisible();
 expect(screen.getByRole('link',{name:/Continue Business Funding & Sales: Open with identity/})).toHaveAttribute('href','/learn/business-funding/01');
 expect(screen.getByText(/86 additional units/)).toBeVisible();
 expect(screen.getByText(/U.S. educational baseline/)).toBeVisible();
});
