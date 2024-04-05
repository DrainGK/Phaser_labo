import Phaser from 'phaser';


export default class Player{


    constructor(scene, x, y) {
        this.scene = scene;
        // Create a circle and add physics to it within the context of the scene
        this.player = scene.add.circle(x, y, 10, 0xffffff);
        scene.physics.add.existing(this.player);
        this.player.body.setCircle(10);
        this.player.body.setCollideWorldBounds(true);
    
        // Initialize keys using the scene's input
        this.keys = scene.input.keyboard.createCursorKeys();
      }
    
      update() {
        const speed = 300;
    
        // Movement logic remains the same, correctly using this.player and this.keys
        if (this.keys.left.isDown) {
          this.player.body.setVelocityX(-speed);
        } else if (this.keys.right.isDown) {
          this.player.body.setVelocityX(speed);
        }
    
        if (this.keys.up.isDown) {
          this.player.body.setVelocityY(-speed);
        } else if (this.keys.down.isDown) {
          this.player.body.setVelocityY(speed);
        }
    
        // Stop the player if no keys are pressed
        if (!this.keys.left.isDown && !this.keys.right.isDown) {
          this.player.body.setVelocityX(0);
        }
        if (!this.keys.up.isDown && !this.keys.down.isDown) {
          this.player.body.setVelocityY(0);
        }
      }

//   move(direction) {
//     const speed = 300;

//     // Reset velocity each time to stop moving when keys are released
//     this.player.body.setVelocity(0);

//     switch (direction) {
//         case 'up':
//             this.player.body.setVelocityY(-speed);
//             break;
//         case 'down':
//             this.player.body.setVelocityY(speed);
//             break;
//         case 'left':
//             this.player.body.setVelocityX(-speed);
//             break;
//         case 'right':
//             this.player.body.setVelocityX(speed);
//             break;
//         }
//     }
}