var RunRun = RunRun || {};
RunRun.game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'gameContainer');

//	Add the States your game has.
//	You don't have to do this in the html, it could be done in your
//  Boot state too, but for simplicity I'll keep it here.
//
// Boot - the initital startup of the game, game settings defined
RunRun.game.state.add('Boot', RunRun.Boot);
// Preload - game assets are loaded into memory
RunRun.game.state.add('Preload', RunRun.Preload);
// MainMenu - the game's welcome screen
RunRun.game.state.add('MainMenu', RunRun.MainMenu);
// Game - the game code
RunRun.game.state.add('Game', RunRun.Game);

//	Now start the game.
RunRun.game.state.start('Boot');
