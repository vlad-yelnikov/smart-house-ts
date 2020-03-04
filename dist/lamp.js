class Lamp extends Device {
    constructor(name, color, power) {
        super(name);
        this.color = color;
        this.power = power;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getPower() {
        return this.power.getPower();
    }
    setPower(value) {
        return this.power.setPower(value);
    }
    increasePower(value) {
        return this.power.increasePower(value);
    }
    decreasePower(value) {
        return this.power.decreasePower(value);
    }
}
