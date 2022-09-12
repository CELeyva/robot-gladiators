var playerName = window.prompt("What is your robot's name");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


for(var i= 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}

// Game States

// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat all enemy-robots


// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight ==="skip"|| promptFight === "SKIP") {
        var confirmSkip = window.confirm ("Are you sureyou'd like to quit?");


        if (confirmSkip) {
            window.alert (playerName + ' has decided to skip the fight. Goodbye! ');
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }


    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + ' attacked ' + enemyName + ' . ' + enemyName + ' now has ' + enemyHealth + ' health remaining'
    )

    if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died! ');

        playerMoney = playerMoney + 20;
        break;
    } else; {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left. ');
    }



    playerHealth = playerHealth - enemyAttack;
    console.log( 
        enemyName + ' has attacked ' + playerName + ' . ' + playerName + ' health remaining '
    );

    if (playerHealth <= 0) {
        window.alert(playerName + ' has died! ');
        break;
    } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left. ');
    }
}
};

// Function to start a new game
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round '+ (i+1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
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
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a acore of" + playerMoney + ".");
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
        window.alert("Thank you for playing Robot GLadiators! Come back soon!");
    }
};

// Start the game when the page loads
startGame();