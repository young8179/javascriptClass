# Javascript 102

## Print Numbers

Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

```js
printNumbers(1, 10);
```

```
1
2
3
4
5
6
7
8
9
10
```

### Bonus

Write two versions of the above function. One using a while loop and the other using a for loop.

## Print a Square

Write a function printSquare which is given a size and prints a square of that size using asterisks.

```js
printSquare(5);
```

```
*****
*****
*****
*****
*****
```

## Print a box

Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

```js
printBox(6, 4);
```

```
******
*    *
*    *
******
```

### Print a Banner

Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

```js
printBanner('Welcome to DigitalCrafts');
```

```
****************************
* Welcome to DigitalCrafts *
****************************
```

## Factor a Number

Write a function factors which is given a number and returns an array containing all its factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number

## Caesar Cipher

Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

```js
cipher('Genius without education is like silver in the mine', 13);
```

```
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
```

## Caesar Cipher 2

Write a function decipher which is given a string, an offset, and returns the original message.

```js
decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
```

```
'Genius without education is like silver in the mine'
```

## Leetspeak

Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

> A => 4
> E => 3
> G => 6
> I => 1
> O => 0
> S => 5
> T => 7

```js
leetspeak('Leet');
```

```
l337
```

## Long-long Vowels

Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

```js
longLongVowels('Good');
```

```
'Goooood'
```

```js
longLongVowels('Cheese');
```

```
'Cheeeeese'
```

```js
longLongVowels('Man');
```

```
'Man'
```

## Sum the numbers

Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

```js
sumNumbers([1, 4, 8]);
```

```
13
```

## Just the positives

Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

```js
positiveNumbers([1, -3, 5, -3, 0]);
```

```
[1, 5, 0]
```

```js
positiveNumbers([1, 2, 3]);
```

```
[1, 2, 3]
```

```js
positiveNumbers([-1, -2, -3]);
```

```
[]
```

# Bonus Exercises

## Matrix Addition

Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

```js
> matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]])
```

```
[ [ 6, 5 ], [ 3, 4 ] ]
```

## Matrix Multiplication

Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro

```js
matrixMultiply(
  [
    [2, 4],
    [3, 4],
  ],
  [
    [5, 2],
    [3, 1],
  ]
);
```

```
[ [22,  8], [27, 10] ]
```

## Rock Paper Scissors

Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

```js
rockPaperScissors('rock', 'scissors');
```

```
'player 1'
```

```js
rockPaperScissors('rock', 'paper');
```

```
'player 2'
```

```js
rockPaperScissors('paper', 'paper');
```

```
'draw'
```

## Tic Tac Toe

Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

returning 'O' if O makes a row
returning 'X' if X makes a row
return null if neither makes a row

```js
ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null],
]);
```

```
'O'
```

```js
ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null],
]);
```

```
'X'
```

```js
ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X'],
]);
```

```
null
```
