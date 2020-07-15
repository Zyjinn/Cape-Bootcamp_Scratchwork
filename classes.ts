// create a class, very much like java!
class User {
    private name: string;
    private email: string;
    private age: number;

    // Runs when intantiate obj.
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("user Created: " + this.name);
    }
}
let john = new User("John Doe", "Joe@gmail.com", 43);

console.log(john.age);