class Character {
  constructor(attackPower, health) {
    this.attackPower = attackPower;
    this.health = health;
  }

  attack() {
    if (Math.random() > 0.5) {
      return this.attackPower;
    }
  }

  hasHealth() {
    if (this.health > 0) {
      return true;
    } else {
      return false;
    }
  }

}

class Red extends Character {
  constructor(attackPower, health) {
    super(attackPower, health);
  }
}

class Blue extends Character {
    constructor(attackPower, health) {
    super(attackPower, health);
  }
}

var winnerArr = ['red', 'red', 'blue', 'blue', 'red']

var newArr =
winnerArr.map( (item) => ({winner: item}) )

var battle = (goesFirst, goesSecond) => {
  let goesFirstTurn = true;

  while (goesFirst.hasHealth() && goesSecond.hasHealth()) {
    goesSecond.health -= goesFirst.attack();
  }
}
