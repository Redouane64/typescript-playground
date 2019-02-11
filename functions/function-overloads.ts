//
function baz(a: string): number;
function baz(b: Array<string>): number;
function baz(c: any): number {
    return typeof c === "string" || typeof c === "object" ? c.length : 0;
}

console.info(baz(["1", "2", "3"]));
console.info(baz("Hello World"));