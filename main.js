alert("Welcome to Danials game Dragon fight, V1.3!");
alert("This game is copyrighted!");
alert("MAKE SURE NOT TO TYPE ANY EXTRA LETTERS OR THINGS WHEN IT ASKS YOU A QUESTION! ANSWER ONLY YES OR NO TO THE QUESTIONS!");
var warning = prompt("Do you want to know what all the attacks do?").toUpperCase();
if (warning == "YES") {
  alert("Takedown has a 1/3 chance of working, it deals 30 damage and gives 25 points.\n Flamethrower has a 3/4 chance of working, it deals 7 damage and has a chance of setting the dragon on fire witch deals 3 damage and gives you 10 points.\n Regen has a 1/3 chance of working, heals 10 health and gives 5 points.\n Sandattack(Store bought item) has a 1/2 chance of working, deals 5 damage, prevents the dragon from attacking and gives 5 points.\n Agility has a 2/3 chance of working, deals a max of 20 damage and gives the amount of points that it deals.\n Healing potion always works although you have to buy it from the shop everytime, if you use it you can still attack, heals 20 health and gives 10 points.\n Strength potion always works although you have to buy it from the shop everytime, if you use it, you can still attack, increases damage from your attacks.\n Weakness potions always works although you have to buy it from the shop everytime, if you use it, you can still attack, lowers the dragons attack damage.\n Luck potions always work although you have to buy it from the shop everytime, if you use it, you can still attack, increases the chance of your attacks working!");
}
var begin = prompt("Do you want to kill a dragon?", "Answer YES or NO").toUpperCase();
var later = true;
var ability = false;
var abilityPoints = 0;
var playerDamage = false;
var points = 0;
var hasSand = false;
var hasAgility = false;
var shop = ["SANDATTACK", [40 + " $ "], "HEALING POTION", [30 + " $ "], "AGILITY", [15 + " $ "], "STRENGTH POTION", [50 + " $ "], "WEAKNESS POTION", [25 + " $ "], "LUCK POTION", [15 + " $ "], "ARMOR", [75 + " $ "]];
var totalHealth = 100;
var playerHealth = 50;
var blind = false;
var question;
var weak = false;
var luck = false;
var hasHeal = false;
var hasStrength = false;
var hasWeak = false;
var hasLuck = false;
var hasArmor = false;
var armorDurability = 0;
var burn = false;
var answer;
if (begin === "YES") {
  var difficulty = prompt("Easy, Medium, Hard or Survival?", "Choose your difficulty!").toUpperCase();
  while (playerHealth > 0 && totalHealth > 0) {
    if (abilityPoints >= 10) {
      ability = true;
    }
    if (points > 14) {
      shop1();
    }
    chooseDigits(difficulty);
    if (question == answer) {
      abilityPoints = abilityPoints + 1;
      personIsCorrectAskForMove();
      alert("The dragon has " + totalHealth + " more health!");
    } else if (question == "QUIT") {
      var playerHealth = 0;
    } else {
      dragonattack();
    }
  }
} else {
  alert("You are NOT a hero!");
}
//Attack function starts
var random = Math.round(Math.random() * 3);

function takedown() {
  //Takedown
  if (luck) {
    random = Math.round(Math.random() * 4);
    if (random >= 3) {
      if (!playerDamage) {
        alert("The luck is on your side!");
        alert("You hit the dragon with takedown!");
        totalHealth = totalHealth - 25;
        points = points + 5;
        luck = false;
      } else {
        alert("The luck is on your side!");
        alert("You hit the dragon with takedown!");
        alert("You are feeling strong!");
        totalHealth = totalHealth - 45;
        points = points + 5;
        luck = false;
        playerDamage = false;
      }
    } else {
      alert("Your luck failed you!");
      alert("You missed!");
      dragonattack();
    }
  } else {
    random = Math.round(Math.random() * 3);
    if (random == 1) {
      if (!playerDamage) {
        alert("You hit the dragon with takedown!");
        totalHealth = totalHealth - 25;
        points = points + 25;
      } else {
        alert("You hit the dragon with takedown!");
        alert("You are feeling strong!");
        totalHealth = totalHealth - 45;
        points = points + 25;
        playerDamage = false;
      }
    } else {
      alert("You missed!");
      dragonattack();
    }
  }
}
//Flamethrower
function flamethrower() {
  var random1 = Math.round(Math.random() * 4);
  var burntime = Math.round(Math.random() * 3);
  if (luck) {
    random1 = Math.round(Math.random() * 11);
    if (random1 >= 9) {
      if (!playerDamage) {
        alert("The luck is on your side!");
        alert("You hit the dragon with flamethrower");
        totalHealth = totalHealth - 7;
        points = points + 10;
        luck = false;
        if (burntime == 1) {
          burn = true;
          totalHealth = totalHealth - 3;
          alert("The dragon is on fire!");
          alert("The dragon took fire damage!");
        }
      } else {
        alert("The luck is on your side!");
        alert("You hit the dragon with flamethrower");
        alert("You are feeling strong!");
        totalHealth = totalHealth - 11;
        points = points + 10;
        playerDamage = false;
        luck = false;
        if (burntime == 1) {
          burn = true;
          totalHealth = totalHealth - 3;
          alert("The dragon is on fire!");
          alert("The dragon took fire damage!");
        }
      }
    } else {
      alert("The luck failed you!");
      alert("You missed!");
      dragonattack();
    }
  } else {
    if (random1 > 1) {
      if (!playerDamage) {
        alert("You hit the dragon with flamethrower");
        totalHealth = totalHealth - 7;
        points = points + 10;
        if (burntime == 1) {
          burn = true;
          totalHealth = totalHealth - 3;
          alert("The dragon is on fire!");
          alert("The dragon took fire damage!");
        }
      } else {
        totalHealth = totalHealth - 11;
        points = points + 10;
        playerDamage = false;
        if (burntime == 1) {
          burn = true;
          totalHealth = totalHealth - 3;
          alert("You hit the dragon with flamethrower");
          alert("The dragon is on fire!");
          alert("The dragon took fire damage!");
          playerDamage = false;
        }
      }
    } else {
      alert("You missed!");
      dragonattack();
    }
  }
}

//Regen
function regen() {
  var random2 = Math.round(Math.random() * 3);
  if (luck) {
    random2 = Math.round(Math.random() * 4);
    if (random2 <= 3) {
      alert("The luck is on you side!");
      alert("You used REGEN!");
      playerHealth = playerHealth + 10;
      alert("You have " + playerHealth + " more health");
      points = points + 5;
      luck = false;
    } else {
      alert("The luck failed you!");
      alert("It didn't work!");
      dragonattack();
    }
  } else {
    if (random2 == 1) {
      alert("You used REGEN!");
      playerHealth = playerHealth + 10;
      alert("You have " + playerHealth + " more health");
      points = points + 5;
    } else {
      alert("It didn't work!");
      dragonattack();
    }
  }
}
//Sandattack
function sandattack() {
  if (hasSand) {
    var random3 = Math.round(Math.random() * 2);
    if (luck) {
      random3 = Math.round(Math.random() * 4);
      if (random3 <= 3) {
        if (!playerDamage) {
          alert("The luck is on your side!");
          alert("You used sandattack");
          totalHealth = totalHealth - 5;
          points = points + 5;
          blind = true;
          luck = false;
        } else {
          alert("The luck is on your side!");
          alert("You used sandattack");
          alert("You are feeling strong!");
          totalHealth = totalHealth - 8;
          points = points + 5;
          blind = true;
          playerDamage = false;
          luck();
        }
      } else {
        alert("The luck failed you!");
        alert("You missed!");
        dragonattack();
      }
    } else {
      if (random3 > 1) {
        if (!playerDamage) {
          alert("You used sandattack!");
          totalHealth = totalHealth - 5;
          points = points + 5;
          blind = true;
        } else {
          totalHealth = totalHealth - 8;
          points = points + 5;
          blind = true;
          playerDamage = false;
        }
      } else {
        alert("You missed!");
        dragonattack();
      }
    }
  } else {
    alert("Buy it from the shop first!");
    personIsCorrectAskForMove();
  }
}
//Healing pot
function healingpotion() {
  if (hasHeal) {
    alert("You drank a Healing potion!");
    potions = false;
    playerHealth = playerHealth + 20;
    alert("You have " + playerHealth + " more health");
    points = points + 10;
    hasHeal = false;
    personIsCorrectAskForMove();
  } else {
    alert("First buy one from the shop!");
    personIsCorrectAskForMove();
  }
}
//Agility
function agility() {
  var randomDamage;
  var randomDamage2;
  var totalDamage;
  if (hasAgility) {
    var random4 = Math.round(Math.random() * 3);
    if (luck) {
      random4 = Math.round(Math.random() * 10);
      if (random4 <= 8) {
        if (!playerDamage) {
          alert("The luck is on your side!");
          alert("You used agility!");
          randomDamage = Math.round(Math.random() * 11);
          randomDamage1 = Math.round(Math.random() * 11);
          totalDamage = randomDamage + randomDamage2;
          totalHealth = totalHealth - totalDamage;
          points = points + totalDamage;
          alert("The dragon has " + totalHealth + " more health");
          luck = false;
        } else {
          alert("The luck is on your side!");
          alert("You used agility!");
          alert("You are feeling strong!");
          randomDamage = Math.round(Math.random() * 16);
          randomDamage1 = Math.round(Math.random() * 16);
          totalDamage = randomDamage + randomDamage2;
          totalHealth = totalHealth - totalDamage;
          points = points + totalDamage;
          alert("The dragon has " + totalHealth + " more health");
          luck = false;
          playerDamage = false;
        }
      } else {
        alert("The luck failed you!");
        alert("You missed!");
        dragonattack();
      }
    } else {
      if (random4 > 1) {
        if (!playerDamage) {
          alert("You used agility!");
          randomDamage = Math.round(Math.random() * 16);
          randomDamage2 = Math.round(Math.random() * 16);
          totalDamage = randomDamage + randomDamage2;
          totalHealth = totalHealth - totalDamage;
          points = points + totalDamage;
        } else {
          randomDamage = Math.round(Math.random() * 11);
          randomDamage2 = Math.round(Math.random() * 11);
          totalDamage = randomDamage + randomDamage2;
          totalHealth = totalHealth - totalDamage;
          points = points + totalDamage;
          playerDamage = false;
        }
      } else {
        alert("You missed!");
        dragonattack();
      }
    }
  } else {
    alert("Buy it from the shop first!");
    personIsCorrectAskForMove();
  }
}

//Strength pot
function strengthpotion() {
  if (hasStrength) {
    alert("You drank a Strength potion!");
    playerDamage = true;
    points = points + 15;
    personIsCorrectAskForMove();
  } else {
    alert("First buy one from the shop!");
    personIsCorrectAskForMove();
  }
}
//Weakness pot
function weaknesspotion() {
  if (hasWeak) {
    alert("You threw a Weakness potion!");
    points = points + 15;
    weak = true;
    hasWeak = false;
    personIsCorrectAskForMove();
  } else {
    alert("First buy one from the shop!");
    personIsCorrectAskForMove();
  }
}
//Luck pot
function luckpotion() {
  if (hasLuck) {
    alert("You drank a luck potion!");
    luck = true;
    points = points + 5;
    hasLuck = false;
    personIsCorrectAskForMove();
  } else {
    alert("First buy one from the shop!");
    personIsCorrectAskForMove();
  }
}

//Attack function ends^^^
function personIsCorrectAskForMove() {
  var askAbility;
  var move, move1, move2, move3;
  if (ability) {
    askAbility = prompt("Do you want to use your ability?").toUpperCase();
    if (askAbility == "YES") {
      alert("You have used your ability!");
      totalHealth = totalHealth / 2;
      blind = true;
      alert("The dragon has " + totalHealth + " more health");
      alert("The dragon can't attack next time!");
      ability = false;
      abilityPoints = abilityPoints - 10;
    }
  }
  if (!hasSand && !hasAgility) {
    move = prompt("Do you choose TAKEDOWN, FLAMETHROWER, REGEN, HEALING POTION, WEAKNESS POTION, LUCK POTION or use a STRENGTH POTION?").toUpperCase();
  } else if (hasAgility && hasSand) {
    move3 = prompt("Do you choose TAKEDOWN, FLAMETHROWER, REGEN, HEALING POTION, WEAKNESS POTION, LUCK POTION, STRENGTH POTION, SANDATTACK OR AGILITY?").toUpperCase();
  } else if (hasSand) {
    move1 = prompt("Do you choose TAKEDOWN, FLAMETHROWER, REGEN, HEALING POTION, WEAKNESS POTION, LUCK POTION, STRENGTH POTION OR SANDATTACK?").toUpperCase();
  } else if (hasAgility) {
    move2 = prompt("Do you choose TAKEDOWN, FLAMETHROWER, REGEN, HEALING POTION, WEAKNESS POTION, LUCK POTION, STRENGTH POTION OR AGILITY?").toUpperCase();
  }
  switch (move || move1 || move2 || move3) {
    case 'TAKEDOWN':
      takedown();
      break;
    case 'FLAMETHROWER':
      flamethrower();
      break;
    case 'REGEN':
      regen();
      break;
    case 'SANDATTACK':
      sandattack();
      break;
    case 'HEALING POTION':
      healingpotion();
      break;
    case 'AGILITY':
      agility();
      break;
    case 'STRENGTH POTION':
      strengthpotion();
      break;
    case 'WEAKNESS POTION':
      weaknesspotion();
      break;
    case 'LUCK POTION':
      luckpotion();
      break;
    default:
      alert("You didn't do anything!");
      personIsCorrectAskForMove();
  }
}

function shop1() {

  var alert1, alert2, alert3, alert4, alert5, alert6, alert7, shopInventory;
  alert("You have " + points + " more points");
  var openShop = prompt("Do you want to open the shop?", "Yes or No").toUpperCase();
  if (openShop == "YES") {
    shopInventory = prompt(shop).toUpperCase();
    //Sandattack
    if (shopInventory == shop[0]) {
      if (points >= 40) {
        alert1 = confirm("Are you sure you want to buy it?");
        if (alert) {
          alert("You have bought SANDATTACK!");
          hasSand = true;
          points = points - 40;
          shop1();
        }
      } else {
        alert("You don't have enough points!");
        shop1();
      }
      //Healing potion
    } else if (shopInventory == shop[2]) {
        if (points >= 30) {
          if (!hasHeal) {
            alert2 = confirm("Are you sure you want to buy it?");
            if (alert2) {
              alert("You have bought a HEALING POTION!");
              points = points - 30;
              hasHeal = true;
              shop1();
            } else {
              alert("You already have one!");
            }
          }
        } else {
          alert("You don't have enought points!");
          shop();
        }
        //Agility
      } else if (shopInventory == shop[4]) {
        if (points >= 15) {
          alert3 = confirm("Are you sure you want to buy it?");
          if (alert3) {
            alert("You bought AGILITY!");
            hasAgility = true;
            points = points - 15;
            shop1();
          }
        } else {
          alert("You don't have enough points!");
          shop();
        }
        //Strength potion
      } else if (shopInventory == "STRENGTH POTION") {
        if (points >= 50) {
          if (!hasStrength) {
            alert4 = confirm("Are you sure you want to buy it?");
            if (alert4) {
              alert("You have bought STRENGTH POTION");
              points = points - 35;
              hasStrength = true;
              shop1();
            }
          } else {
            alert("You already have one!");
          }
        } else {
          alert("You don't have enough points!");
          shop1();
        }

        //Weakness potion
      } else if (shopInventory == shop[6]) {
        if (points >= 25) {
          if (!hasWeak) {
            alert5 = confirm("Are you sure you want to buy it?");
            if (alert5) {
              alert("You have bought a WEAKNESS POTION");
              points = points - 25;
              hasWeak = true;
              shop1();
            } else {
              alert("You already have one!");
              shop1();
            }
          }
        } else {
          alert("You don't have enough points!");
          shop1();
        }
        //Luck potion
      } else if (shopInventory == shop[8]) {
        if (points >= 15) {
          if (!hasLuck) {
            alert6 = confirm("Are you sure you want to buy it?");
            if (alert6) {
              alert("You have bought a LUCK POTION!");
              points = points - 15;
              hasLuck = true;
              shop1();
            }
          } else {
            alert("You already have one!");
            shop1();
          }
        } else {
          alert("You don't have enough points!");
          shop1();
        }
        //Armor
      } else if (shopInventory == shop[10]) {
        if (points >= 75) {
          if (!hasArmor) {
            alert7 = confirm("Are you sure you want to buy it?");
            if (alert7) {
              alert("You have equiped Armor!");
              armorDurability = 1;
              hasArmor = true;
              points = points - 75;
              shop1();
            }
          } else {
            alert("You already have one!");
            shop1();
          }
        } else {
          alert("You don't have enough points!");
          shop1();
        }
      }
    }
  }
function dragonattack() {
  var dragonchance, dragonchoose;
  if (!blind) {
    dragonchance = Math.round(Math.random() * 4);
    if (dragonchance > 1) {
      dragonchoose = Math.round(Math.random() * 6);
      if (dragonchoose <= 2) {
        alert("The dragon attacked you with FLARE!");
        if (weak) {
          if (armorDurability > 0) {
            playerHealth = playerHealth - 4;
            weak = false;
            armorDurability = armorDurability - 1;
            if (armorDurability === 0) {
              hasArmor = false;
              alert("Your armor broke!");
            }
          } else {
            playerHealth = playerHealth - 8;
            weak = false;
          }
        } else {
          if (armorDurability > 0) {
            playerHealth = playerHealth - 11;
            armorDurability = armorDurability - 1;
            if (armorDurability === 0) {
              hasArmor = false;
              alert("Your armor broke!");
            }
          } else {
            playerHealth = playerHealth - 15;
          }
        }
      } else if (dragonchoose < 5) {
        alert("The dragon attacked you with SPITFIRE!");
        if (weak) {
          if (armorDurability > 0) {
            playerHealth = playerHealth - 1;
            weak = false;
            armorDurability = armorDurability - 1;
            if (armorDurability === 0) {
              hasArmor = false;
              alert("Your armor broke!");
            }
          } else {
            playerHealth = playerHealth - 4;
            weak = false;
          }
        } else {
          if (armorDurability > 0) {
            playerHealth = playerHealth - 7;
            armorDurability = armorDurability - 1;
            if (armorDurability === 0) {
              hasArmor = false;
              alert("Your armor broke!");
            }
          } else {
            playerHealth = playerHealth - 11;
          }
        }
      } else {
        alert("The dragon HEALED!");
        totalHealth = totalHealth + 15;
        alert("The dragon has " + totalHealth + " more health");
      }
      alert("You have " + playerHealth + " more health");
      if (burn) {
        totalHealth = totalHealth - 3;
        alert("The dragon took fire damage!");
        if (burnTime < 2) {
          burn = false;
        }
      }
    } else {
      alert("The dragons attack didn't work!");
    }
  } else {
    alert("The dragon could not attack!");
    blind = false;
  }
  if (playerHealth === 0) {
    alert("You are NOT a hero");
  }
}

function chooseDigits(difficulty) {
  var number1 = Math.round(Math.random() * 8);
  var number2 = Math.round(Math.random() * 8);
  var number3 = Math.round(Math.random() * 11);
  if (later && difficulty == "EASY") {
    alert("You are on Easy");
    totalHealth = 100;
    playerHealth = 50;
    later = false;
  }
  if (difficulty == "HARD") {
    number1 = Math.round(Math.random() * 13);
    number2 = Math.round(Math.random() * 13);
    number3 = Math.round(Math.random() * 21);
    if (later && difficulty == "HARD") {
      alert("You are on Hard");
      totalHealth = 150;
      playerHealth = 30;
      later = false;
      points = 20;
    }
  }
  if (difficulty == "MEDIUM") {
    number1 = Math.round(Math.random() * 10);
    number2 = Math.round(Math.random() * 10);
    number3 = Math.round(Math.random() * 16);
    if (later && difficulty == "MEDIUM") {
      alert("You are on Medium!");
      totalHealth = 125;
      playerHealth = 40;
      later = false;
      points = 10;
    }
  }
  if (difficulty == "SURVIVAL") {
    if (later) {
      alert("You chose SURVIVAL!");
      totalHealth = 0;
      playerHealth = 0;
      var chooseHealth = prompt("How much health do you want the dragon to have?", "type only a number!");
      totalHealth = totalHealth + chooseHealth;
      var choosephealth = prompt("How much health do you want yourself to have?", "type only a number!");
      playerHealth = playerHealth + choosephealth;
      later = false;
      alert("On survival the dragon has " + chooseHealth + " health, you have " + choosephealth + " health, and you have 60 points!");
      points = points + 60;
    }
    number1 = Math.round(Math.random() * 16);
    number2 = Math.round(Math.random() * 16);
    number3 = Math.round(Math.random() * 26);
  }
  question = prompt("What is " + number1 + " x " + number2 + " + " + number3 + " ?", "Type the answer here!").toUpperCase();
  answer = number1 * number2 + number3;
  alert("The answer was " + answer + " !");
}
