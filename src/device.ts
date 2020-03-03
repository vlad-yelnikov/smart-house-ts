abstract class Device implements IDevice {
    private name: string;
    private state: boolean;

    constructor(name: string) {
        this.name = name;
        this.state = false;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getState(): boolean {
        return this.state;
    }

    on(): void {
        this.state = true;
    }

    off(): void {
        this.state = false;
    }
}
