const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {

  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });

  describe('age', () => {
    test('has an age', () => {

    });
  });

  describe('height', () => {
    test('has a height', () => {

    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  xdescribe('passGrowingSeason', () => {
    test('should change the tree age', () => {

    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {

    });

  });

  xdescribe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {

    });

    test('returns false if tree is not old enough to bear fruit', () => {

    });
  });

  xdescribe('isDead', () => {
    test('should return false for an alive tree', () => {

    });

    test('should return true for a dead tree', () => {

    });
  });

  xdescribe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {

    });

    test('should return false if the tree has no oranges', () => {

    });
  });

  xdescribe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {

    });

    test('the returned orange should no longer be on the tree', () => {

    });

    test('should raise an error if the tree has no oranges', () => {

    });
  });
});
