// create a class, very much like java!
class User {
    name: string;
    email: string;
    age: number;

    // Runs when intantiate obj.
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("user Created: " + this.name);
    }
    register() {
        console.log(this.name + ' is now registered');
    }
    payInvoice() {
        console.log(this.name + 'has paid their invoice');
    }
}

class Member extends User {
    id: number;
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
// let john = new User("John Doe", "Joe@gmail.com", 43);

// john.register();
// console.log(john.age);

let mike: User = new Member(1, 'Mike Smith', 'Mike@gmail.com', 33);
mike.payInvoice();