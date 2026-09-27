// Fail closed: no provider calls or request-body processing before secure setup.
// Adding an API key alone must never enable a public paid endpoint.
export async function POST() {
  return Response.json({
    error: {
      code: 'CHAT_NOT_CONFIGURED',
      message: 'Chat is not connected yet. Secure GPT-6 Astra access and private sign-in are required.',
    },
  }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
}
