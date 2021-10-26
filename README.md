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

**When to use interfaces:**

- You only need the definition for the server data without introducing additional overhead for the final output.
- You only need to transmit data without any behaviors or logic (constructor initialization, methods)
- You do not instantiate/create objects from your interface very often
- * Using simple object-literal notationlet instance: FooInterface = { ... };, you risk having semi-instances all over the place.
- * That doesn't enforce the constraints given by a class ( constructor or initialization logic, validation, encapsulation of private fields...Etc)
- * You need to define contracts/configurations for your systems (global configurations)


**When to use classes:**

- You instantiate your class and change the instances state over time.
- Instances of your class will need methods to query or mutate its state
- When you want to associate behaviors with data more closely;
- You enforce constraints on the creation of your instaces.
- If you only write a bunch of properties assignments in your class, you might consider using a type instead.

