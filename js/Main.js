var RunRun = RunRun || {};
<<<<<<< HEAD

RunRun.game = new Phaser.Game(746, 420, Phaser.CANVAS, '');

RunRun.game.state.add('Boot', RunRun.Boot);
RunRun.game.state.add('Preload', RunRun.Preload);
RunRun.game.state.add('Game', RunRun.Game);

=======
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
>>>>>>> 73036ba3f6ddbff9a9c6808a96896a8654858f1a
RunRun.game.state.start('Boot');
