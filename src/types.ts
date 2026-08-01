// Shape of a single entry returned by the demonlist.org API
// (GET https://api.demonlist.org/level/classic/list)
export interface DemonlistLevel {
    id: number;
    ingame_id: number;
    placement: number;
    name: string;
    points: number;
    list_percent: number;
    length: number;
    holder: string;
    verification_url: string | null;
    date_created: string;
}

export interface SimplifiedDemon {
    name: string;
    position: number;
    video: string | null;
    creator: string;
    levelID?: number;
    link?: string;
}

export interface RouletteState {
    playing: boolean;
    selectedLists: {
        main: boolean;
        extended: boolean;
        legacy: boolean;
    };
    demons: SimplifiedDemon[];
    current: number;
    percent: number;
    percents: number[];
}
