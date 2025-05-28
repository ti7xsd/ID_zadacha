const people = [
    { id: 1, name: "Иван Иванов", age: 30, city: "София" },
    { id: 2, name: "Мария Петрова", age: 25, city: "Пловдив" },
    { id: 3, name: "Георги Георгиев", age: 40, city: "Варна" },
];

function searchPerson() {
    const input = document.getElementById("personId");
    const result = document.getElementById("result");
    const id = Number(input.value);

    if (!id) {
        result.textContent = "Моля, въведи валидно ID!";
        return;
    }

    const person = people.find(p => p.id === id);

    if (person) {
        result.textContent = `ID: ${person.id}\nИме: ${person.name}\nВъзраст: ${person.age}\nГрад: ${person.city}`;
    } else {
        result.textContent = "Няма човек с това ID.";
    }
}
