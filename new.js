"use strict";
// Enums...!
Object.defineProperty(exports, "__esModule", { value: true });
var one;
(function (one) {
    one[one["admin"] = 0] = "admin";
    one[one["user"] = 1] = "user";
})(one || (one = {}));
var two;
(function (two) {
    two["admin"] = "Erum";
    two["user"] = "Sikander";
})(two || (two = {}));
let self = {
    name: "Noor",
    id: one.user,
};
console.log(two.admin);
console.log(two.user);
console.log(self.name);
console.log(self.id);
