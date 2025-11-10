export const useRegionFilter = async (polygon: any, token: string) => {
  const res = await fetch('/api/filter/region', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ regionPolygon: polygon }),
  });
  const data = await res.json();
  return data.features || [];
};