/*
TypeScript supports some simple types (primitives) you may know.

There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.
*/ 

/*
Type Assignment
    When creating a variable, there are two main ways TypeScript assigns a type:
        Explicit
        Implicit
In both examples below firstName is of type string

Explicit Type
Explicit - writing out the type:
    let firstName: string = "Dylan";
Explicit type assignment are easier to read and more intentional.


Implicit Type
Implicit - TypeScript will "guess" the type, based on the assigned value:
    let firstName = "Dylan";

Note: Having TypeScript "guess" the type of a value is called infer.

Implicit assignment forces TypeScript to infer the value.

Implicit type assignment are shorter, faster to type, and often used when developing and testing.
*/ 



/*
Error In Type Assignment
TypeScript will throw an error if data types do not match.

Example
    let firstName: string = "Dylan"; // type string
    firstName = 33; // attempts to re-assign the value to a different type


Implicit type assignment would have made firstName less noticeable as a string, but both will throw an error:

Example
    let firstName = "Dylan"; // inferred to type string
    firstName = 33; // attempts to re-assign the value to a different type

    JavaScript will not throw an error for mismatched types.


    Unable to Infer
TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.

Example
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);


This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json. That is a JSON config file for customizing how some of TypeScript behaves.

Note: you may see primitive types capitalized like Boolean.

boolean !== Boolean
For this tutorial just know to use the lower-cased values, the upper-case ones are for very specific circumstances.
*/ 

