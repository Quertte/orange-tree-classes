class OrangeTree {

  passGrowingSeason() {

  }

  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    //  orange-picking logic goes here
  }
}

module.exports = OrangeTree;
