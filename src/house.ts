class House {
    private name: string;
    private devices: Array<IDevice>;

    constructor(name: string) {
        this.name = name;
        this.devices = [];
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public addDevice(device: IDevice): void {
        this.devices.push(device);
    }

    public getDevice(name: string): IDevice {
        return this.devices.find(device => device.getName() === name);
    }

    public delDevice(name: string): void {
        const device = this.getDevice(name);
        const index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
    }

    public getAllDevices(): Array<IDevice> {
        return this.devices;
    }

    public delayedOn(name: string, delay: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.getDevice(name).on();
                resolve();
            }, delay);
        });
    }
    
    public delayedOff(name: string, delay: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.getDevice(name).off();
                resolve();
            }, delay);
        });
    }
}
