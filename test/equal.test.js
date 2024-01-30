test ("test toBe", () => {
    const name ="Nadila";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Nadila');
});

test(" test toEqual", () => {
    let person = {id: "Nadila"};
    Object.assign(person, {name : "Nadila"});

    expect(person).toEqual({id: "Nadila", name: "Nadila"})
})