const lamp = new Lamp('xiaomi', 'yellow', new PowerRegulator(100));
const microwave = new Microwave('LG', new PowerRegulator(100));
const house = new House('my house');

house.addDevice(microwave);
house.addDevice(lamp);
