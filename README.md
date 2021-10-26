# Paylink Technical Test


## FizzBuzz

Create a loop that will print all the numbers for the range, 1-20. If the number is:
• divisible by 3, print 'Fizz'
• divisible by 5, print 'Buzz'
• divisible by 3 & 5, 'FizzBuzz'
• otherwise print the number

## Fibonacci
Write a method in Angular, to obtain a given Fibonacci number (n): fibonacci(5);
fibonacci(10);
fibonacci(1);

## MagicGetterSetter
Create a 'MagicGetterSetter' class/trait/interface. It's functionality should include;
• 'magic get' will go to a 'get' method containing the property, or throw an exception
• 'magic set' will go to a 'set' method containing the property, or throw an exception

### Notes

My approach to code is to always try to find the simplest solution to a problem in any case.
The Fizz Buzz problem is just to check if I know the module % operator and I came up with a simple solution that would show the result in the front-end.
The Fibonacci problem the way it is presented is a bit dubious as it asks me for the Fibonacci(n) but requests only 1, 5 and 10 so I created a generic function that will take any value but used buttons with set values in a way to get the final result.
Finally, the Magic Getter Setter presents itself as something quite difficult when if you go to the definitions of Classes and Interfaces in angular it is clear that a class needs to be used. From that, I again used the simplest approach to create the class and from that it is easily instantiatable.

**When to use interfaces:**

- You only need the definition for the server data without introducing additional overhead for the final output.
- You only need to transmit data without any behaviors or logic (constructor initialization, methods)
- You do not instantiate/create objects from your interface very often
 * Using simple object-literal notationlet instance: FooInterface = { ... };, you risk having semi-instances all over the place.
 * That doesn't enforce the constraints given by a class ( constructor or initialization logic, validation, encapsulation of private fields...Etc)
 * You need to define contracts/configurations for your systems (global configurations)


**When to use classes:**

- You instantiate your class and change the instances state over time.
- Instances of your class will need methods to query or mutate its state
- When you want to associate behaviors with data more closely;
- You enforce constraints on the creation of your instaces.
- If you only write a bunch of properties assignments in your class, you might consider using a type instead.

