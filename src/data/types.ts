export type SongData = {
    audio: string;
    artist: string;
    index: number;
    title: string;
    visual: string;
}

export type RoomPerson = {
    id: PersonId;

    joinedTime?: number;

    username?: string;
}

// NAF native

export type BroadcastData = {
    broadcasting: true;
    data: unknown;
    from: string;
    type: string;
}

export type JoinRoomData = {
    room: RoomName;
}

export type SendData = {
    to: string;
    [i: string]: unknown;
}

// my stuff

export type SetUsernameData = {
    username: string;
}

export type UpdateOccupantsData = {
    occupants: RoomPerson[];
}

// Nominal types let us use primitives without accidentally switching them.
// For example, something that takes a room ID string shouldn't allow passing a person ID.

export type Nominal<Brand extends string> = string & {
    /**
     * This member doesn't *actually* exist; we're using it to let TypeScript
     * tell us when we've mixed up our nominal types.
     */
    __brand: Brand;
}

export type PersonId = Nominal<'Person'>;

export type RoomName = Nominal<'Room'>;
