export const useAuditLogs = async (token: string) => {
  const res = await fetch('/api/audit/logs', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.logs;
};