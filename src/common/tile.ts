export type TileData = Readonly<{
  x: number;
  y: number;
}>;

export class Tile implements TileData {
  readonly x!: number;
  readonly y!: number;

  constructor(data: TileData) {
    Object.assign(this, data);
  }
}
