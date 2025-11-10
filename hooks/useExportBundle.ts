export const useExportBundle = async (token: string) => {
  const res = await fetch('/api/bundle/zip', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Export failed');
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'InsightHubGH_bundle.zip';
  document.body.appendChild(link);
  link.click();
  link.remove();
};