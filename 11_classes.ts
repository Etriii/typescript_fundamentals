/*
TypeScript adds types and visibility modifiers to JavaScript classes.

Learn more about JavaScript classes: https://www.w3schools.com/js/js_classes.asp
*/ 


/*
Members: Types

The members of a class (properties & methods) are typed using type annotations, similar to variables.

ex. 
    class Person {
    name: string;
    }

    const person = new Person();
    person.name = "Jane";
*/ 

/*
Members: Visibility

Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.
    * public - (default) allows access to the class member from anywhere
    * private - only allows access to the class member from within the class
    * protected - allows access to the class member from itself and any classes that inherit it, 
      which is covered in the inheritance section below

ex. 
    class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
    }

    const person = new Person("Jane");
    console.log(person.getName()); // person.name isn't accessible from outside the class since it's private


*/ 