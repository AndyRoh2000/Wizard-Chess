class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
        this.isMusicPlaying = false; 
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('menuimg', './img/menu.png')
        this.load.audio('backgroundMusic', './assets/loopmusic.mp3')
        this.load.audio('start', './assets/sfx-shot.wav')

        this.load.audio('au1', './audio/Abstract2.mp3');
        this.load.audio('au2', './audio/African2.mp3');
        this.load.audio('au3', './audio/Coffee1.mp3');
    }
    create() {
        this.bgm = this.sound.add('au3');
        var red = 41;
        var green = 253;
        var blue = 246;
        this.darkness = this.add.rectangle(0, 0, 800, 800, 0x000000, 0).setOrigin(0, 0).setDepth(5);
        var color = Phaser.Display.Color.GetColor(red, green, blue);
        var lineTop = this.add.rectangle(100, 200, 200, 2, color).setDepth(5).setOrigin(0, 0).setDisplaySize(190,1.51); 
        var lineBottom = this.add.rectangle(100, 270, 100, 2, color).setDepth(5).setOrigin(0, 0).setDisplaySize(190,2.3);
        var textRound = this.add.text(100,215,"Start Game",{
             fontSize: '35px', color: '#ff00ff', stroke: '#ffffff',fontFamily:"Georgia",
            strokeThickness: 5
        }).setDepth(5).setInteractive();
        textRound.on('pointerover', () => {
            textRound.setColor('#00ff00'); 
        })
        textRound.on('pointerout', () => {
            textRound.setColor('#ff00ff'); 
        })
        textRound.on('pointerdown', () => {
            textRound.setColor('lightblue'); 
            this.bgm.play()
            this.time.delayedCall(300, () => {
                this.scene.start('playScene'); 

            })
        })
        textRound.on('pointerup', () => {
            textRound.setColor('#ff00ff'); 
        })
        this.input.keyboard.on('keydown-SPACE', () => { 
            this.scene.start('GameOver'); 
        });
        this.add.sprite(0,0,"menuimg").setDisplaySize(800,800).setOrigin(0,0)
    }

    update() {
        
    }
}
