import { useEffect } from "react";

import { videoElement, controls } from "@components/elements";
import { useRoomContext } from "@connection/RoomContext";

import { useEmitOnClick } from "../useEmitOnClick";

export const useVolumeControls = () => {
  const { roomData } = useRoomContext();
  const { volume } = roomData.get();

  useEmitOnClick(controls.volumeHighButton, (oldRoomData) => ({
    volume: Math.min(oldRoomData.volume + 0.25, 1),
  }));

  useEmitOnClick(controls.volumeLowButton, (oldRoomData) => ({
    volume: Math.max(oldRoomData.volume - 0.25, 0),
  }));

  useEffect(() => {
    videoElement.volume = volume;
    controls.volumeHighButton.setAttribute(
      "opacity",
      volume === 1 ? "0.5" : "1"
    );
    controls.volumeLowButton.setAttribute(
      "opacity",
      volume === 0 ? "0.5" : "1"
    );
  }, [volume]);
};
