export const useHotspotPrediction = async (token: string) => {
  const res = await fetch('/api/hotspot/predict', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.prediction;
};