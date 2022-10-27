const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {
  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toEqual(0);
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toEqual(2.5);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    test('should change the tree age', () => {
      tree.passGrowingSeason();
      expect(tree.age).toEqual(1);
    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      tree.passGrowingSeason();
      expect(tree.height).toEqual(5);
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      while (tree.age < 6) {
        tree.passGrowingSeason();
      }
      tree.passGrowingSeason();
      expect(tree.oranges.length > 0).toBeTruthy();
    });
  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      while (tree.age <= 6) {
        tree.passGrowingSeason();
      }
      expect(tree.isMature()).toBeTruthy();
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      expect(tree.isMature()).toBeFalsy();
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      expect(tree.isDead()).toBeFalsy();
    });

    test('should return true for a dead tree', () => {
      while (tree.age <= 100) {
        tree.passGrowingSeason();
      }
      expect(tree.isDead()).toBeTruthy();
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      while (tree.age <= 6) {
        tree.passGrowingSeason();
      }
      expect(tree.hasOranges()).toBeTruthy();
    });

    test('should return false if the tree has no oranges', () => {
      expect(tree.hasOranges()).toBeFalsy();
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      while (tree.age <= 6) {
        tree.passGrowingSeason();
      }
      const countOranges = tree.oranges.length;
      tree.pickAnOrange();
      expect(tree.oranges.length).toBeLessThan(countOranges);
    });

    test('the returned orange should no longer be on the tree', () => {
      while (tree.age <= 7) {
        tree.passGrowingSeason();
      }
      const orange = tree.pickAnOrange();
      expect(tree.oranges).toEqual(expect.not.objectContaining(orange));
    });

    test('should raise an error if the tree has no oranges', () => {
      expect(() => tree.pickAnOrange()).toThrowError(new Error('This tree has no oranges'));
    });
  });
});
