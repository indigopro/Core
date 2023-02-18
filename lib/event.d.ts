export declare abstract class Event<T> {
    readonly type: string;
    readonly target: T;
    readonly timeStamp: number;
    constructor(element: T);
}
export declare class ChangeEvent<T> extends Event<T> {
}
export declare class SelectEvent<T> extends Event<T> {
}
export type ChangeEventHandler<T> = {
    (event: ChangeEvent<T>): void;
};
export type SelectEventHandler<T> = {
    (event: SelectEvent<T>): void;
};
