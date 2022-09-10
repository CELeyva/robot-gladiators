var playerName = window.prompt("What is your robot's name");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


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

// Create function
var fight = function() {
        // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight ==="fight"|| promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked
    console.log(
    playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health reamining."
);

// Check enemy's health
    if (enemyHealth <= 0) {
        window.alert (enemyNames + "has died!");
}
    else {
        window.alert (enemyNames + "still has" + enemyHealth + "health left.");
}

// Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

// Log a resultimg message to the console so we know it worked
    console.log(
        enemyNames+"attacked"+playerName+"."+playerName+"now has"+playerHealth+"health reamaing."
);

    if (playerHealth <= 0) {
        window.alert(playerName+"has died!");
}
    else {
        window.alert(playerName+"still has"+playerHealth+"health left.");
}

// If player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip){
            window.alert (playerName+"has decided to skip this fight. Goodbye!");
            playerMoney=playerMoney-2;
        }
    
        else {
            fight();
        }
    } else {
        window.alert ("You need to choose a valid option. Try again!");
    }
    };


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}