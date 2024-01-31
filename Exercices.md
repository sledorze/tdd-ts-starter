# Exercices

## Sorted number Stack

Implement a stack with the following methods: push, pop, isEmpty, isFull

### Consider

- What is the expected behavior when pushing to a full stack? (opt for a strategy)
- What about popping from an empty stack?.

### To continue

- Change the stack size
- Change strategy for eviction when full

## Line Wrapper

(This kata is from Robert Martin (Uncle Bob))

You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, and a column number. The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number. You try to break lines at word boundaries.

Like a word processor, break the line by replacing the last space in a line with a newline.

## City finder

You write a City finder exposing this method:

findCities(x, y, distance) will return all cities in a of radius `distance` in km, centered on (x, y).

You will use an API that return Cities by Blocks of 10km x 10km.
getCities(x, y)

This API costs a lot and you don't want to make useless calls nor redo some calls more than once per year for a block

## Reverse Polish Notation Calculator

In reverse polish order, the operator follows the operands. For example, to add 3 and 4, one would write 3 4 + rather than 3 + 4.
Also 3 4 5 + \* would be 3 \* (4 + 5) = 27.

Calculator methods will be added in increasing order.

1. enterNumber, add
2. multiply, divide, subtract
3. ignore invalid inputs but log them via a logger (provided as a dependency).
