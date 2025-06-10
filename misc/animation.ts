export interface ISiteAnimations {
    end_events: Array<number>;
    animations: Array<IAnimation>;
    sequences: Array<IAnimationSequence>;
}

export interface IAnimation {
    id: string;
    begin: string;
    attributeName: string;
    repeatCount: string;
    values: string;
    keyTimes: string;
    dur: string;
}

export interface IAnimationSequence {
    id: string;
    events: Array<number>;
    animations: Array<string>;
}
