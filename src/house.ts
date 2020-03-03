class House {
    private name: string;
    private devices: Array<IDevice>;

    constructor(name: string) {
        this.name = name;
        this.devices = [];
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    addDevice(device: IDevice): void {
        this.devices.push(device);
    }

    getDevice(name: string): IDevice {
        return this.devices.find(device => device.getName() === name)
    }

    delDevice(name: string): void {
        const device = this.getDevice(name);
        const index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
    }

    getAllDevices(): Array<IDevice> {
        return this.devices;
    }

    delayedOn(name: string, delay: number, callback: Function): void {
        const device = this.getDevice(name);
        setTimeout(() => {
            device.on();
            callback();
        }, delay);
    }

    delayedOff(name: string, delay: number, callback: Function): void {
        const device = this.getDevice(name);
        setTimeout(() => {
            device.off();
            callback();
        }, delay);
    }
}