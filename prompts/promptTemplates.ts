export function promptForAffordableHousing(region: string) {
  return `Generate JSON chunks for a low-cost housing project in ${region}. Include types: clusteredMarkers, waterBodies, vegetation, elevation, and boqOverlay. Each chunk should contain location {lat, lng}, label or name, and relevant attributes. Stream the data in parts.`;
}

export function promptForBOQOnly(region: string) {
  return `Generate JSON chunks of type "boqOverlay" for a housing project in ${region}. Each item should include name, location {lat, lng}, quantity, unit, and cost_usd. Stream the data in parts.`;
}

export function promptForEnvironmentalScan(region: string) {
  return `Generate JSON chunks for an environmental scan of ${region}. Include types: waterBodies, vegetation, elevation. Each chunk should contain location {lat, lng}, name, and relevant metrics. Stream the data in parts.`;
}

export function promptForClusterAnalysis(region: string) {
  return `Generate JSON chunks of type "clusteredMarkers" for population or infrastructure clusters in ${region}. Each cluster should include latitude, longitude, label, and count. Stream the data in parts.`;
}