export const useGPSFilter = async (radiusKm: number, token: string) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch('/api/filter/gps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ latitude, longitude, radiusKm }),
      });
      const data = await res.json();
      resolve(data.features || []);
    }, reject);
  });
};