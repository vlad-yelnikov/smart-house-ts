class Lamp extends Device {
    private color: string;
    private power: IPowerRegulator;

    constructor(name: string, color: string, power: IPowerRegulator) {
        super(name);
        this.color = color;
        this.power = power;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
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
