class PowerRegulator implements IPowerRegulator {
    private power: number;

    constructor(power: number) {
        this.power = power;
    }

    public getPower(): number {
        return this.power;
    }

    public setPower(value: number): void {
        if (value >= 0 && value <= 100) this.power = value;
    }

    public increasePower(value: number): void {
        if (this.power + value <= 100) this.power += value;
    }

    public decreasePower(value: number): void {
        if (this.power - value >= 0) this.power -= value;
    }
}
