import { POST } from './route';

it('fails closed without reading user content or calling any provider', async () => {
  const network = vi.spyOn(globalThis, 'fetch');
  const response = await POST();
  expect(response.status).toBe(503);
  expect(response.headers.get('cache-control')).toBe('no-store');
  expect(await response.json()).toEqual({
    error: { code: 'CHAT_NOT_CONFIGURED', message: 'Chat is not connected yet. Secure GPT-6 Astra access and private sign-in are required.' },
  });
  expect(network).not.toHaveBeenCalled();
  network.mockRestore();
});
