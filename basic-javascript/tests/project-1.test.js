/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should multiply by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(5), 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract five', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
    it('should return a num', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(10), 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('hi', 'hi'), 'boolean');
    });
    it('should confirm params are same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hi', 'hi'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(5, 5), 'boolean');
    });
    it('should be equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(5, 5), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(50), 'boolean');
    });
    it('should confirm number is less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(50), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(60), 'boolean');
    });
    it('should confirm param is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(60), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('will add a number', () => {
      const add = funcs.add;
      assert.typeOf(add(2, 3), 'number');
    });
    it('will equal a sum of each num', () => {
      const add = funcs.add;
      assert.equal(add(2, 3), 5);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('will subtract a num', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(10, 5), 'number');
    });
    it('will produce', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 5), 5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('will divide a num', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(10, 2), 'number');
    });
    it('will divide correctly', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 2), 5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('will multiply a num', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(5, 2), 'number');
    });
    it('will equal the multiple', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, 2), 10);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(11, 2), 'number');
    });
    it('will show the goal', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(11, 2), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(10), 'boolean');
    });
    it('will show the goal', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(10), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(5), 'boolean');
    });
    it('will show the goal', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(5), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const square = funcs.square;
      assert.typeOf(square(2), 'number');
    });
    it('will show the goal', () => {
      const square = funcs.square;
      assert.equal(square(2), 4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(2), 'number');
    });
    it('will show the goal', () => {
      const cube = funcs.cube;
      assert.equal(cube(2), 8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(2, 2), 'number');
    });
    it('will show the goal', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 2), 4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(8.9), 'number');
    });
    it('will show the goal', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(8.9), 9);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(8.9), 'number');
    });
    it('will show the goal', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(8.9), 9);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('hi'), 'string');
    });
    it('will show the goal', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hi'), 'hi!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('will be whatever follows the comma after typeOf', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('Sponge', 'Bob'), 'string');
    });
    it('will show the goal', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Sponge', 'Bob'), 'Sponge Bob');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });    
    it('will be whatever follows the comma after typeOf', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Everybody'), 'string');
    });
    it('will show the goal', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Everybody'), 'Hello Everybody!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('is a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(3, 5), 'number');
    });
    it('will show the goal', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(3, 5), 15);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('is a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(3, 5), 'number');
    });
    it('will show the goal', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(3, 5), 7.5);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('is a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(3), 'number');
    });
    it('returns area', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(3), 28.274333882308138);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('is a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(5, 3, 8), 'number');
    });
    it('returns the rectangular prism', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(5, 3, 8), 120);
    });
  });
});

// CR Ash, my fingers thank thee!
