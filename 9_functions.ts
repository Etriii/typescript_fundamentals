// TypeScript has a specific syntax for typing function parameters and return values.
// ------------------------------------------------------------------------------------------------
/*
Return Type
The type of the value returned by the function can be explicitly defined.

ex. 

the `: number` here specifies that this function returns a number

    function getTime(): number {
        return new Date().getTime();
    }

If no return type is defined, TypeScript will attempt to 
infer it through the types of the variables or expressions returned.
*/ 

// ------------------------------------------------------------------------------------------------

/*
Void Return Type
The type void can be used to indicate a function doesn't return any value.

ex. 
    function printHello(): void {
        console.log('Hello!');
    }
*/ 

// ------------------------------------------------------------------------------------------------

/*
Parameters
Function parameters are typed with a similar syntax as variable declarations.

ex. 
    function multiply(a: number, b: number) {
        return a * b;
    }

If no parameter type is defined, TypeScript will default to using any, 
unless additional type information is available
*/ 

// ------------------------------------------------------------------------------------------------

/*
Optional Parameters
By default TypeScript will assume all parameters are required, but they 
can be explicitly marked as optional.

ex. 

    // the `?` operator here marks parameter `c` as optional
    function add(a: number, b: number, c?: number) {
        return a + b + (c || 0);
    }
*/ 

// ------------------------------------------------------------------------------------------------

/*
Default Parameters
For parameters with default values, the default value goes after the type annotation:

ex. 

    function pow(value: number, exponent: number = 10) {
        return value ** exponent;
    }

TypeScript can also infer the type from the default value.
*/ 

// ------------------------------------------------------------------------------------------------

/*
Named Parameters
Typing named parameters follows the same pattern as typing normal parameters.

ex. 
    function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
        return dividend / divisor;
    }
*/ 

// ------------------------------------------------------------------------------------------------

/*
Rest Parameters

Rest parameters can be typed like normal parameters, but the type 
must be an array as rest parameters are always arrays.

ex. 
    function add(a: number, b: number, ...rest: number[]) {
        return a + b + rest.reduce((p, c) => p + c, 0);
    }

think of it as something like a foreach, but it returns a final value :>
*/ 

// ------------------------------------------------------------------------------------------------

/*
Type Alias
Function types can be specified separately from functions with type aliases.

ex.
    type Negate = (value: number) => number;

    // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
    const negateFunction: Negate = (value) => value * -1;
*/ 


