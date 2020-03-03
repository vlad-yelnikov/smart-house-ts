interface IDevice {
    [x: string]: any;
    getName(): string;

    setName(name: string): void;

    getState(): boolean;

    on(): void;

    off(): void;
}
