class Microwave extends Device {
    constructor(name, power) {
        super(name);
        this.power = power;
        this.time = 0;
        this.mode = '';
    }
    getTime() {
        return this.time;
    }
    setTime(time) {
        this.time = time;
    }
    getMode() {
        return this.mode;
    }
    heat() {
        this.mode = 'heat';
    }
    defrost() {
        this.mode = 'defrost';
    }
    grill() {
        this.mode = 'grill';
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
