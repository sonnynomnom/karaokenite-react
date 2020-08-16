import React, { useContext, useState } from 'react';

import { environments } from '@data/environments';

import { RoomContextValue, RoomPerson } from './types';

export const RoomContext = React.createContext<RoomContextValue>(null!);

const useGetterAndSetter = <Value>(value: Value) => {
    const [stateValue, set] = useState(value);

    return {
        get: () => stateValue,
        set,
    }
}

export type RoomContextSettings = {
    host?: boolean;
    room: string;
    username: string;
}

export const useRoomContextValue = ({ host, room, username }: RoomContextSettings): RoomContextValue => {
    // https://nextjs.org/docs/advanced-features/automatic-static-optimization#how-it-works

    // TODO: It'd be nice to return a new Error if room or username aren't strings...
    return {
        currentSong: useGetterAndSetter<number | undefined>(undefined),
        environment: useGetterAndSetter(environments[0]),
        host: useGetterAndSetter(!!host),
        otherPeople: useGetterAndSetter<RoomPerson[]>([]),
        playing: useGetterAndSetter<boolean>(false),
        roomName: useGetterAndSetter(room),
        songs: useGetterAndSetter<string[]>([]),
        username: useGetterAndSetter(username),
        volume: useGetterAndSetter(1),
    }
};

export const useRoomContext = () => useContext(RoomContext);