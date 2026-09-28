import {expect,it,vi} from 'vitest';
import {fireEvent,render,screen,within} from '@testing-library/react';
import HomePage from '@/app/study/page';
import {SiteNavigation} from './SiteNavigation';
vi.mock('next/navigation',()=>({usePathname:()=>'/subjects/business-funding'}));
it('shows priority two consistently in cards, desktop, mobile and department navigation with an actual icon',()=>{
 const {container}=render(<HomePage/>);
 expect(screen.getByText('11 departments · a place for every curiosity')).toBeVisible();
 expect([...container.querySelectorAll('.subject-study-card .subject-copy strong')].slice(0,2).map(e=>e.textContent)).toEqual(['Russian','Business Funding & Sales']);
 expect(container.querySelector('[data-subject-icon="business-funding"] svg path')).not.toBeNull();
 const nav=screen.getByRole('navigation',{name:'Primary navigation'});
 expect(within(nav).getAllByRole('link').slice(1,3).map(l=>l.textContent)).toEqual(['Russian','Business Funding & Sales']);
 fireEvent.click(screen.getByRole('button',{name:'Open navigation'}));
 const mobile=screen.getByRole('navigation',{name:'Mobile navigation'});
 expect(within(mobile).getAllByRole('link').slice(1,3).map(l=>l.textContent)).toEqual(['Russian','Business Funding & Sales']);
 render(<SiteNavigation/>);fireEvent.click(screen.getByText('All departments'));
 const global=screen.getByRole('navigation',{name:'All subject navigation'});
 expect(within(global).getAllByRole('link').slice(1,3).map(l=>l.textContent)).toEqual(['Russian','Business Funding & Sales']);
});
