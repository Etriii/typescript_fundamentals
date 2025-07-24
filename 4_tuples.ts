/*
Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:


Example
    // define our tuple
    let ourTuple: [number, boolean, string];

    // initialize correctly
    ourTuple = [5, false, 'Coding God was here']; //[ 5, false, 'Coding God was here' ]

As you can see we have a number, boolean and a string. But what happens 
if we try to set them in the wrong order:

Example
    // define our tuple
    let ourTuple: [number, boolean, string];

    // initialized incorrectly which throws an error
    ourTuple = [false, 'Coding God was mistaken', 5];

Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
*/ 


/*
Readonly Tuple
A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values:

Example
    // define our tuple
    let ourTuple: [number, boolean, string];
    // initialize correctly
    ourTuple = [5, false, 'Coding God was here'];
    // We have no type safety in our tuple for indexes 3+
    ourTuple.push('Something new and wrong');
    console.log(ourTuple);//[ 5, false, 'Coding God was here', 'Something new and wrong' ]


You see the new valueTuples only have strongly defined types for the initial values:

Example
    // define our readonly tuple
    const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
    // throws error as it is readonly.
    ourReadonlyTuple.push('Coding God took a day off'); 
          // 
          [Output] prog.ts(4,18): error TS2339: Property 'push' does not exist 
          on type 'readonly [number, boolean, string]'.
*/ 


/*
Named Tuples
Named tuples allow us to provide context for our values at each index.

ex. 
const graph: [x: number, y: number] = [55.2, 41.3];

Named tuples provide more context for what our index values represent.
*/ 



/*Destructuring Tuples
Since tuples are arrays we can also destructure them.

ex. 
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
*/


