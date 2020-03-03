class Lamp extends Device {
    private color: string;
    private power: IPowerRegulator;

    constructor(name: string, color: string, power: IPowerRegulator) {
        super(name);
        this.color = color;
        this.power = power;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
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
