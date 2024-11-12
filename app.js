"use strict";
// Primitive Types
// null
// number
// undefined
// boolean
// string
// any
const updatePartial = (user, updates) => {
    return user;
};
const person = { username: "Alice" };
const newPerson = updatePartial(person, { username: "Dexter" });
console.log(person);
console.log(newPerson);
