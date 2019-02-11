interface Callback {
    (...args: any[]): void;
}

let testCallback: Callback = (...args) => console.log(args);

testCallback(1, 2, 3, "foo", "bar", 3.14);