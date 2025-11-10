export const useRegionBundle = async (regions: any[], token: string) => {
  const res = await fetch('/api/region-export/bundle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ regions }),
  });
  if (!res.ok) throw new Error('Export failed');
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'region_bundle.zip';
  document.body.appendChild(link);
  link.click();
  link.remove();
};