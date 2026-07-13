export async function postForm(
  endpoint: string,
  payload: Record<string, unknown>
): Promise<{ ok: boolean; message?: string }> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
