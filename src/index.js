import Phaser from "phaser";
import Player from "./classes/Player"; // Ensure the path matches where your Player class is located

import MainScene from "./scenes/MainScene";

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, // No gravity in the game
    },
  },
  scene: [MainScene], // Add your Player scene directly to the configuration
};

const game = new Phaser.Game(config);
