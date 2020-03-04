class PowerRegulator {
    constructor(power) {
        this.power = power;
    }
    getPower() {
        return this.power;
    }
    setPower(value) {
        if (value >= 0 && value <= 100)
            this.power = value;
    }
    increasePower(value) {
        if (this.power + value <= 100)
            this.power += value;
    }
    decreasePower(value) {
        if (this.power - value >= 0)
            this.power -= value;
    }
}
