    let arrayOfLaurens = [
        {
            name: "Lauren 1",
            age: 27
        },
        {
            name: "Lauren 2",
            age: 28
        },
        {
            name: "Lauren 3",
            age: 29
        }
    ];

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            console.log(this.name);
            console.log(this.age);
        }

        getThePersonsName(){
            return this.name;
        }

    }


    let lauren1 = new Person(arrayOfLaurens[0].name, arrayOfLaurens[0].age);
    let lauren2 = new Person(arrayOfLaurens[1].name, arrayOfLaurens[1].age);
    let lauren3 = new Person(arrayOfLaurens[2].name, arrayOfLaurens[2].age);