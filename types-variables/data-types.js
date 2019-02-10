var foo = 42;
var bar = "Hello World!";
var names = ["Karim", "Ali", "Rachid", "Farid"];
console.info(typeof foo + ": " + foo, typeof bar + ": " + bar);
console.info(typeof names + ": ");
names.forEach(function (element) {
    console.log(element);
});
// enums
var types;
(function (types) {
    types[types["Number"] = 2] = "Number";
    types[types["Text"] = 4] = "Text";
    types[types["Image"] = 8] = "Image";
    types[types["Stream"] = 15] = "Stream";
})(types || (types = {}));
;
var test = types.Image;
console.info(typeof test, typeof types[test]);
console.info(test, types[test]);
// tuples
var tomsk = ["Tomsk", -30];
console.log(tomsk);
