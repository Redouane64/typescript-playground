//
abstract class Shape {
    abstract draw(): void;
}

class Square extends Shape {
    constructor(public width: number, public height: number) { super(); }
    draw(): void { }
}

class Circle extends Shape {
    constructor(public radius: number) { super(); }
    draw(): void { }
}