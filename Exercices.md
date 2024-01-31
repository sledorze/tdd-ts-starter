# Exercices

## Sorted number Stack

Implement a stack with the following methods: push, pop, isEmpty, isFull

### Consider

- What is the expected behavior when pushing to a full stack?
- What about popping from an empty stack?.

## String calculator

Create a simple String calculator with a method int Add(string numbers)

1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”

2. Allow the Add method to handle an unknown amount of numbers
3. Allow the Add method to handle new lines between numbers (instead of commas).
4. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.
5. Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1**_2_**3” should return 6

### Bonus

1. Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[\*][%]\n1\*2%3” should return 6.
2. Make sure you can also handle multiple delimiters with length longer than one char

## Reverse Polish Notation Calculator

In reverse polish order, the operator follows the operands. For example, to add 3 and 4, one would write 3 4 + rather than 3 + 4.
Also 3 4 5 + \* would be 3 \* (4 + 5) = 27.

Calculator methods will be added in increasing order.

1. enterNumber, add
2. multiply, divide, subtract
3. ignore invalid inputs but log them via a logger (provided as a dependency).

## Write a City finder

Write the test using the Behaviour

You are given a cities API roughtly equivalent to the following:

findCities(x, y, distance) will return all cities in a square centered on (x, y) and with a radius of `radius`.

You might consider using (beware, they might expose a radius based API):

> http://geodb-cities-api.wirefreethought.com/

You're tasked to build a city finder App that will allow you to find cities around a specific location and radius.
Bonus: subsequent calls should be faster than the first one by caching part of requests results (new Cities are not built overnight).
