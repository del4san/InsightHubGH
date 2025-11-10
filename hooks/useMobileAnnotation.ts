export const useMobileAnnotation = async (lat: number, lon: number, note: string, token: string) => {
  const res = await fetch('/api/annotations/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ lat, lon, note }),
  });
  const data = await res.json();
  return data.status;
};