
class Hello {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

}

newObj = new Hello("anshul", "2024");

function hello() {
    console.log(newObj.year);
}
hello();