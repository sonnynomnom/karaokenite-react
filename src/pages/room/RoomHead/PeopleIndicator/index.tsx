import cx from "classnames";
import React from "react";

import { Text } from "@components/typography/Text";

import { useRoomContext } from "../../RoomContext";
import { Smiley } from "../../../../components/Smiley";
import styles from "./styles.module.scss";

export type PeopleIndicatorProps = {
  className?: string;
  onClick: () => void;
};

export const PeopleIndicator: React.FC<PeopleIndicatorProps> = ({
  className,
  onClick,
}) => {
  const { client, occupants } = useRoomContext();
  const connected = !!client.get().id;
  const ordered = Array.from(occupants.get().values()).reverse();
  const count = ordered.length;

  return (
    <button
      className={cx(
        styles.peopleIndicator,
        !connected && styles.unconnected,
        className
      )}
      disabled={!connected}
      onClick={onClick}
    >
      <Text as="span" className={styles.count} fontSize="md">
        {connected ? count : "•••"}
      </Text>
      <div className={styles.smileys}>
        {ordered.map((_, index) => (
          <Smiley className={styles.smiley} key={index} index={index} />
        ))}
      </div>
    </button>
  );
};
