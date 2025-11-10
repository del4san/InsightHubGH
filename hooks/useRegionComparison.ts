export const useRegionComparison = async (regions: any[], token: string) => {
  const res = await fetch('/api/compare/regions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ regions }),
  });
  const data = await res.json();
  return data.results;
};