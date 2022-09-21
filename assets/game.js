console.log(enemyInfo.names);
console.log(enemyInfo.names.length);
console.log(enemyInfo.names[0]);
console.log(enemyInfo.names[3]);


for(var i= 0; i < enemyInfo.names.length; i++) {
    console.log(enemyInfo.names[i]);
    console.log(i);
    console.log(enemyInfo.names[i] + "is at" + i + "index");
}

// Game States

// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat all enemy-robots


// "LOSE" - Player robot's health is zero or less

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemyInfo.health > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight ==="skip"|| promptFight === "SKIP") {
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");


        if (confirmSkip) {
            window.alert (playerInfo.name + ' has decided to skip the fight. Goodbye! ');
            playerInfo.money = Math.max(0, playerInfo.money-10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }

    var damage= randomNumber(playerInfo.attack-3, playerInfo.attack);

    enemyInfo.health = Math.max(0, enemyInfo.health - damage);
    console.log(
        playerInfo.name + ' attacked ' + enemyInfo.name + ' . ' + enemyInfo.name + ' now has ' + enemyInfo.health + ' health remaining'
    )

    if (enemyInfo.health <= 0) {
        window.alert(enemyInfo.name + ' has died! ');

        playerInfo.money = playerInfo.money + 20;
        break;
    } else; {
        window.alert(enemyInfo.name + ' still has ' + enemyInfo.health + ' health left. ');
    }



    var damage = randomNumber(enemyInfo.attack -3, enemyInfo.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log( 
        enemyInfo.name + ' has attacked ' + playerInfo.name + ' . ' + playerInfo.name + ' health remaining '
    );

    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died! ');
        break;
    } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left. ');
    }
}
};

// Function to start a new game
var startGame = function() {
    playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert('Welcome to Robot Gladiators! Round '+ (i+1));

        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyInfo.name - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
            if (storeConfirm) {
            shop();
            }
        }
    }

    else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
        }
    }
    endGame();
};

// End the game
var endGame = function() {
    
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a acore of" + playerInfo.money + ".");
    }

    else {
        window.alert("You've lost your robot in battle.");
    }
    

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }

    else { 
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

switch(shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
        playerInfo.refillHealth();
        break:

    case "UPGRADE": // new case
    case "upgrade":
        playerInfo.upgradeAttack();
        break;

    case "LEAVE":
    case "leave":
        window.alert("Leaving the store.");
        break;

    default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
}
};


var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min +1 )+ min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
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

// Start the game when the page loads
startGame();