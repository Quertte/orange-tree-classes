// const Orange = require('./orange');

class OrangeTree {
  constructor(age = 0, height = 2.5, oranges = []) {
    this.age = age;
    this.height = height;
    this.oranges = oranges;
  }

  passGrowingSeason() {
    this.age += 1;
    if (this.height <= 25 - 2.5) {
      this.height += 2.5;
    }
    if (this.isMature() && !this.isDead()) {
      let countOrange = Math.floor(Math.random() * (300 - 100 + 1) + 100);
      while (countOrange > 0) {
        this.oranges.push(new Orange());
        countOrange -= 1;
      }
    }
  }

  isDead() {
    return this.age > 100;
  }

  isMature() {
    return this.age >= 6;
  }

  hasOranges() {
    return this.oranges.length > 0;
  }

  pickAnOrange() {
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    return this.oranges.pop();
  }
}

// module.exports = OrangeTree;
