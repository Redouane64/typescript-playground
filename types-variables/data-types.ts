let foo: number = 42;
let bar: string = "Hello World!";

let names: string[] = ["Karim", "Ali", "Rachid", "Farid"]; // or: Array<string>

console.info(`${typeof foo}: ${foo}`, `${typeof bar}: ${bar}`);

console.info(`${typeof names}: `);
names.forEach(element => {
    console.log(element);
});

// enums
enum types { Number = 0x2, Text = 0x4, Image = 0x8, Stream = 0xf };

let test: types = types.Image;

console.info(typeof test, typeof types[test]);
console.info(test, types[test]);

// tuples
let tomsk: [string, number] = ["Tomsk", -30];
console.log(tomsk);