export interface Season {
    id: number;
    name: string;
}

export interface Weapon {
    action: string;
    name: string;
}

export interface Sex {
    with: string[];
    type: string;
    when: string;
}

export interface Married {
    to: string;
    when: string;
    type: string;
    consummated: boolean;
}

export interface Character {
    name: string;
    alive?: boolean;
    mannerOfDeath: string;
    killedBy: string[];
    weapon: Weapon[];
    title: string;
    sex: Sex;
    married: Married;
    born?: boolean;
}

export interface Scene {
    sceneStart: string;
    sceneEnd: string;
    location: string;
    subLocation: string;
    characters: Character[];
    greensight?: boolean;
    altLocation: string;
    warg?: boolean;
    flashback?: boolean;
}

export interface Episode {
    seasonId: number;
    id: number;
    episodeTitle: string;
    episodeLink: string;
    episodeAirDate: string;
    episodeDescription: string;
    openingSequenceLocations: string[];
    scenes: Scene[];
}

export interface Got {
    seasons: Season[];
    episodes: Episode[];
}

