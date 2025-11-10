type Region = {
  name: string;
  traits: string;
};

/**
 * Builds a prompt for generating insights across multiple regions.
 */
export function buildRegionInsightPrompt(regions: Region[]): string {
  const formatted = regions
    .map((r, i) => `${i + 1}. ${r.name} — ${r.traits}`)
    .join("\n");

  return `
You are a geospatial analyst tasked with generating insights about urban regions in Accra.

Here are the regions and their traits:
${formatted}

Please analyze patterns, compare strengths and weaknesses, and suggest planning priorities. Format your response in markdown with headings and bullet points.
`;
}

/**
 * Builds a prompt for ranking regions by development potential.
 */
export function buildRegionRankingPrompt(overlays: Record<string, string>): string {
  const regionList = Object.entries(overlays)
    .map(([region, traits]) => `- ${region}: ${traits}`)
    .join("\n");

  return `
You are a geospatial analyst. Based on the following region overlays, rank the top 5 districts in Accra by development potential:

${regionList}

Provide a markdown-formatted summary with rankings, rationale, and recommendations.
`;
}