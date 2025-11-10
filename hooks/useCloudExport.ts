export const useCloudExport = async (format: 'geojson' | 'csv', token: string) => {
  const res = await fetch('/api/cloud/google-drive', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ format }),
  });
  const data = await res.json();
  return data.status;
};