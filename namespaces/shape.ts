//
namespace Geometery {

    abstract class Shape {
        abstract draw(): void;
    }

    export namespace Shapes {
        export class Square extends Shape {
            private _width: number;
            private _length: number;

            constructor(width: number, length: number) {
                super();
                this._width = width;
                this._length = length;
            }

            public get Width() {
                return this._width;
            }

            public get Length() {
                return this._length;
            }

            draw(): void { }
        }

        export class Circle extends Shape {
            private _radius: number;
            constructor(radius: number) {
                super();
                this._radius = radius;
            }

            draw(): void { }
        }
    }
}