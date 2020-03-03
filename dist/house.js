"use strict";
class House {
    constructor(name) {
        this.name = name;
        this.devices = [];
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    addDevice(device) {
        this.devices.push(device);
    }
    getDevice(name) {
        return this.devices.find(device => device.name === name);
    }
    delDevice(name) {
        const device = this.getDevice(name);
        const index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
    }
    getAllDevices() {
        return this.devices;
    }
    delayedOn(name, delay, callback) {
        const device = this.getDevice(name);
        setTimeout(() => {
            device.on();
            callback();
        }, delay);
    }
    delayedOff(name, delay, callback) {
        const device = this.getDevice(name);
        setTimeout(() => {
            device.off();
            callback();
        }, delay);
    }
}
