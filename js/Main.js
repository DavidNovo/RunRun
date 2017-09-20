var RunRun = RunRun || {};

RunRun.game = new Phaser.Game(746, 420, Phaser.CANVAS, '');

RunRun.game.state.add('Boot', RunRun.Boot);
RunRun.game.state.add('Preload', RunRun.Preload);
RunRun.game.state.add('Game', RunRun.Game);

RunRun.game.state.start('Boot');
