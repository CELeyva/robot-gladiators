<<<<<<< HEAD
var randomNumber = function (min,max){
    var value = Math.floor(Math.random() * (max-min + 1) + min);
    
    return value;
}


var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
    
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
=======
var randomNumber = function (min,max) {
    var value = Math.floor(Math.random() * (max-min) + min);

    return value;
};

var fightOrSkip = function () {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
>>>>>>> develop

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    if (promptFight ==="skip") {
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");


        if (confirmSkip) {
            window.alert (playerInfo.name + " has decided to skip the fight. Goodbye!" );
            playerInfo.money = Math.max(0, playerInfo.money-10);

            return true;
        }
    }
    return false;
};

var fight = function(enemy) {
    var isPlayerTurn = true;
    if (Math.random() > 0.5){
        isPlayerTurn = false; 
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
        if (fightOrSkip()) {
        break;
    }

    var damage= randomNumber(playerInfo.attack-3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + ' attacked ' + enemy.name + ' . ' + enemy.name + ' now has ' + enemy.health + ' health remaining'
    );

    if (enemy.health <= 0) {
<<<<<<< HEAD
        window.alert(enemy.name + ' has died! ');
=======
        window.alert(enemy.name + " has died! ");
>>>>>>> develop

        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
<<<<<<< HEAD
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left. ');
    }



    var damage = randomNumber(enemy.attack -3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log( 
        enemy.name + ' has attacked ' + playerInfo.name + ' . ' + playerInfo.name + ' health remaining '
    );
=======
        window.alert(enemy.name + " still has "+ enemy.health + " health left.");
    }
        } else {
            var damage = randomNumber(enemy.attack -3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
>>>>>>> develop

    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died! ");
        break;
    } else {
<<<<<<< HEAD
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left. ');
        }
    }
=======
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left. ");
    }
    
}
    isPlayerTurn = !isPlayerTurn;
}
>>>>>>> develop
};

// Function to start a new game
var startGame = function() {
<<<<<<< HEAD
   // playerInfo.reset();
=======
    //playerInfo.reset();
>>>>>>> develop

for (var i = 0; i < enemyInfo.length; i++) {
    
    if (playerInfo.health > 0) {
        window.alert('Welcome to Robot Gladiators! Round '+ (i+1));

        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            playerInfo.reset();
            if (storeConfirm) {
            shop();
            }
            playerInfo.reset();
        }
    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    endGame();
};

// End the game
var endGame = function() {
<<<<<<< HEAD
    window.alert ("The game has ended. Now let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of" + playerInfo.money +'.');
    } else {
        window.alert("You've lost your robot in battle!");
=======
    window.alert("The game has now ended. Let's see how you did!");

    var highScore = localStorage.getItem("highscore");
    if ( highScore === null) {
        highScore = 0;
    }

    if (playerInfo.money > highScore) {
        localStorage.setItem ("highscore", playerInfo.money);
        localStorage.setItem ("name", playerInfo.name);
        
        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
>>>>>>> develop
    }
    

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else { 
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
<<<<<<< HEAD
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

switch (shopOptionPrompt) {
    case 'REFILL': // new case
    case 'refill':
        playerInfo.refillHealth();
        break;

    case 'UPGRADE': // new case
    case 'upgrade':
        playerInfo.upgradeAttack();
        break;

    case 'LEAVE':
    case 'leave':
        window.alert('Leaving the store.');
=======
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter: 1 for REFILL, 2 for UPGRADE, or 3 for Leave."
    );

    shopOptionPrompt=parseInt(shopOptionPrompt);
switch(shopOptionPrompt) {
    case 1:
        playerInfo.refillHealth();
        break;

    case 2:
        playerInfo.upgradeAttack();
        break;

    case 3:
        window.alert("Leaving the store.");
>>>>>>> develop
        break;

    default:
        window.alert('You did not pick a valid option. Try again.');
        shop();
        break;
}
};

var getPlayerName = function() {
    var name = "";

<<<<<<< HEAD
=======
    while (name === ""|| name === null){
        name = prompt ("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};


>>>>>>> develop
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },

    refillHealth: function() {
        if (this.money>=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health+=20;
        this.money-=7;
    }
        else {
            window.alert("You don't have enough money!");

        }
    },
    upgradeAttack: function() {
        if (this.money>=7) {
            window.alert("Uprading player's attack by 6 for 7 dollars.");
        this.attack+=6;
        this.money-=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};


var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];


startGame();