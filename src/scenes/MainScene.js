class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        this.player = new Player(this, 400, 300); // Example player setup
        
        // Initialize InputManager with a movement callback
        // this.inputManager = new InputManager(this, (direction) => {
        //     this.player.move(direction);
        // });

        // // Optionally set a specific input layout
        // this.inputManager.setLayout("WASD");
    }
}