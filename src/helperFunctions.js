export function mapLineData(element) {
  return {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: element.coordinates,
    },
    properties: {
      length: element.length,
    },
  };
}
