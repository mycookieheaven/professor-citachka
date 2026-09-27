import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,render,screen,fireEvent} from '@testing-library/react';
import {ReadingPractice} from './ReadingPractice';
import {books} from './books';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();localStorage.clear();push.mockReset();});
it.each(books.map((book,index)=>({book,index})))('saves $book.title and directly opens exact next guide or review',({book,index})=>{
 render(<ReadingPractice book={book}/>);const next=books[index+1];const button=screen.getByRole('button',{name:next?`Next reading guide: ${next.title}`:'Complete guides & review Literature'});expect(button).toBeEnabled();
 fireEvent.click(screen.getByRole('button',{name:book.choices.find(c=>c.correct)!.text}));fireEvent.change(screen.getByLabelText(/Your interpretation/),{target:{value:book.model}});fireEvent.click(screen.getByRole('button',{name:'Compare with a model'}));
 push.mockImplementation(()=>{expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.literature.completed).toContain(`guide:${book.id}`);expect(JSON.parse(localStorage.getItem(`citachka-literature-${book.id}-v1`)!).response).toBe(book.model);});
 fireEvent.click(button);expect(push).toHaveBeenCalledExactlyOnceWith(next?`/subjects/literature#${next.id}`:'/subjects/literature#course-path');
});
