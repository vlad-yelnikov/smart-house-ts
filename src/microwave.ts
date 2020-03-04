class Microwave extends Device {
    private time: number;
    private mode: string;
    private power: IPowerRegulator;

    constructor(name: string, power: IPowerRegulator) {
        super(name);
        this.power = power;
        this.time = 0;
        this.mode = '';
    }

   public getTime(): number {
        return this.time;
    }

    public setTime(time: number) {
        this.time = time;
    }

    public getMode(): string {
        return this.mode;
    }

    public heat(): void {
        this.mode = 'heat';
    }

    public defrost(): void {
        this.mode = 'defrost';
    }

    public grill(): void {
        this.mode = 'grill';
    }

    public getPower(): number {
        return this.power.getPower();
    }

    public setPower(value: number): void {
        return this.power.setPower(value);
    }

    public increasePower(value: number): void {
        return this.power.increasePower(value);
    }

    public decreasePower(value: number): void {
        return this.power.decreasePower(value);
    }
}
