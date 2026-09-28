import { fireEvent, render, screen } from '@testing-library/react';
import HomePage from '@/app/study/page';

describe('Ask Professor Citachka bubble', () => {
  it('keeps chat in a visible side bubble until the learner opens it on the dashboard', () => {
    render(<HomePage />);
    const launcher = screen.getByRole('button', { name: 'Open Ask Professor Citachka' });
    expect(launcher).toBeVisible();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(launcher);
    expect(screen.getByRole('dialog', { name: 'Ask Professor Citachka' })).toBeVisible();
    expect(screen.getByRole('status')).toHaveTextContent('Chat is not connected yet');
    const draft = screen.getByRole('textbox', { name: 'Your question (unsent draft)' });
    fireEvent.change(draft, { target: { value: 'Explain musical intervals.' } });
    expect(draft).toHaveValue('Explain musical intervals.');
    expect(screen.getByRole('button', { name: 'Send — setup required' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Close Ask Professor Citachka' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
