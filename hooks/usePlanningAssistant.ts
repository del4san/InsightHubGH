export const usePlanningAssistant = async (token: string) => {
  const res = await fetch('/api/planning/recommend', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.recommendations;
};