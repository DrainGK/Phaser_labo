class InputManager {
    constructor(scene, onMove) {
        this.scene = scene;
        this.onMove = onMove; // Callback function for movement

        // Default to "WASD" layout, can be changed as needed
        this.setLayout("WASD");
    }

    setLayout(layout) {
        // Clears previous key listeners if they exist
        if (this.keys) {
            Object.values(this.keys).forEach(key => {
                key.removeAllListeners();
            });
        }

        // Use switch-case to handle different layouts
        switch (layout) {
            case "WASD":
                this.keys = this.scene.input.keyboard.addKeys({
                    up: 'W', down: 'S', left: 'A', right: 'D'
                });
                break;
            case "ZQSD":
                this.keys = this.scene.input.keyboard.addKeys({
                    up: 'Z', down: 'S', left: 'Q', right: 'D'
                });
                break;
            case "ARROWS":
                this.keys = this.scene.input.keyboard.addKeys({
                    up: Phaser.Input.Keyboard.KeyCodes.UP,
                    down: Phaser.Input.Keyboard.KeyCodes.DOWN,
                    left: Phaser.Input.Keyboard.KeyCodes.LEFT,
                    right: Phaser.Input.Keyboard.KeyCodes.RIGHT
                });
                break;
            default:
                console.warn(`Layout ${layout} is not recognized. Falling back to default WASD layout.`);
                this.keys = this.scene.input.keyboard.addKeys({
                    up: 'W', down: 'S', left: 'A', right: 'D'
                });
        }

        this.listenForInput();
    }

    listenForInput() {
        console.log("input");
        // Register 'down' event for each direction
        Object.keys(this.keys).forEach(direction => {
            this.keys[direction].on('down', () => {
                this.onMove(direction);
            });
        });
    }
}
