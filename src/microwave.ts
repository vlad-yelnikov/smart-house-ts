class Microwave extends Device {
    private time: number;
    private mode: string;
    private power: PowerRegulator;

    constructor(name: string, power: PowerRegulator) {
        super(name);
        this.power = power;
        this.time = 0;
        this.mode = '';
    }

    getTime(): number {
        return this.time;
    }

    setTime(time: number) {
        this.time = time;
    }

    getMode(): string {
        return this.mode;
    }

    heat(): void {
        this.mode = 'heat';
    }

    defrost(): void {
        this.mode = 'defrost';
    }

    grill(): void {
        this.mode = 'grill';
    }

    getPower(): number {
        return this.power.getPower();
    }

    setPower(value: number): void {
        return this.power.setPower(value);
    }

    increasePower(value: number): void {
        return this.power.increasePower(value);
    }

    decreasePower(value: number): void {
        return this.power.decreasePower(value);
    }
}
