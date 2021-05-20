const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => Math.floor(Math.random() * (dragon.strength + 15));

const calDano = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength );

const mageAttack = (mage) => {
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Não tenho mais mana...',
  };

  if (mage.mana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - mage.intelligence)) + mage.intelligence);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
    return turnStats;
}

console.log(calDano());
console.log(danoDragon());