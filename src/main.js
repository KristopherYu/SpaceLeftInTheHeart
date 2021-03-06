//MOD CREATED BY KRISTOPHER YU
//ALL ASSETS CREATED BY KRISTOPHER YU
//TITLE: SPACE LEFT IN THE HEART
//FINALIZED: 4/19/2021
//HOURS SUNK: 25+
//POINTS BREAKDOWN:
//S(hrek): "Redesign the game's artwork,
//UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)"
//Explanation: "I've changed the theme to be a dating sim, I changed all the base sound files and made music"
//Intermediate: New spaceship type (20)
//Explanation: "I added a smaller spaceship (insult box) at the bottom of the screen which is slow, explodes on hit and deducts points to prevent spamming"
//Novice: parallax scrolling (10)
//Explanation: "The base background goes at a set speed, but the background in the window goes faster"
// Display time remaining(10)
// In the top left it shows time remaining
// Starting: Allow player to control rocket after fired (5)
//Explanation: "You can move left and right in the air"
//Randomize spaceship's movement direction at the start of each play (5)
//Explanation: "Spaceship movement is randomized at the start, and after each hit"
//Inplement speed increase that happens after 30 seconds (5)
//Explanation: "It goes faster when there is 30 seconds remaining"
// Track high score (5)
// Explanation: It shows the best date score at the end of each game
// #FACADE Tier (Bonus)
//      Music pauses when player misses
//      Score decrease on misses
//      Unlockable borders
//      Changing dialog animations based on enemy/option you hit
//      Tutorial/Instruction pages
//      Score modifiers based on difficulty level
//      Different ui endings based on score
//Total: 120 + FACADE
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
}

let game = new Phaser.Game(config);
// Set UI Sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;
let starspeed = 1;
//set unlocks
let border = 0;
let flower = 0;
let macaroni = 0;
let highscore = 0;
//reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT, keyM, keyE;