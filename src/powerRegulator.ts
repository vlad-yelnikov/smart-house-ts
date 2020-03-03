class PowerRegulator implements IPowerRegulator {
    public power: number;

    constructor(power: number) {
        this.power = power;
    }

    getPower(): number {
        return this.power;
    }

    setPower(value: number): void {
        if (value >= 0 && value <= 100) this.power = value;
    }

    increasePower(value: number): void {
        if (this.power + value <= 100) this.power += value;
    }

    decreasePower(value: number): void {
        if (this.power - value >= 0) this.power -= value;
    }
}
