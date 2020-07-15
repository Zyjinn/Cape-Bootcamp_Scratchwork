// create a class, very much like java!
var User = /** @class */ (function () {
    // Runs when intantiate obj.
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user Created: " + this.name);
    }
    return User;
}());
var john = new User("John Doe", "Joe@gmail.com", 43);
console.log(john.age);
