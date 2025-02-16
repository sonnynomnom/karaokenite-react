import { RoomData } from "./types";

export const environments = [
  "osiris",
  "contact",
  "forest",
  "yavapai",
  "arches",
];

export const defaultRoomData: RoomData = {
  environment: environments[0],
  playing: false,
  songIndex: 0,
  volume: 1,
};
