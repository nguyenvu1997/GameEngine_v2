function randomIntInRange(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

export { randomIntInRange }