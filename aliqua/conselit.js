const tileSize = 256;
const zoom = 12;

const latToTile = (lat) => Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * (1 << zoom));
const lonToTile = (lon) => Math.floor((lon + 180) / 360 * (1 << zoom));

const getTileRange = (latitude, longitude) => {
  const xTile = lonToTile(longitude);
  const yTile = latToTile(latitude);

  const minX = xTile * tileSize;
  const minY = yTile * tileSize;
  const maxX = (xTile + 1) * tileSize - 1;
  const maxY = (yTile + 1) * tileSize - 1;

  return { minX, minY, maxX, maxY };
};

const minTile = getTileRange(37.7749, -122.4194);
