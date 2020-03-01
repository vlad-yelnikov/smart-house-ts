abstract class Device {
    constructor(protected name: string) {}
    protected state = false;
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getState() {
        return this.state;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}
