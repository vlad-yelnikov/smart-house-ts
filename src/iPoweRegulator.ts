interface IPowerRegulator {
    getPower(): number;

    setPower(value: number): void;

    increasePower(value: number): void;

    decreasePower(value: number): void;
}
