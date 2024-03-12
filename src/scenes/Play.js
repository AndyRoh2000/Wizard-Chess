class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    init() {
    }

    preload() {
        this.load.atlas('assets', './img/assets.png', './img/assets.json');
        
        this.load.audio('au1', './audio/Abstract2.mp3');
        this.load.audio('au2', './audio/African2.mp3');
        this.load.audio('au3', './audio/Coffee1.mp3');
    }
    create() {
        this.au1= this.sound.add('au1');
        this.au2= this.sound.add('au2');
        this.au3= this.sound.add('au3');
        this.graphics = this.add.graphics().setDepth(1);
        this.turnPlay="white"
        this.movable=new Movable(this);
        this.addBoardAndPieces()
    }
    addBoardAndPieces(){
        this.board = [
            ["black_rook", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_rook"],
            ["black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn"],
            [], [], [], [],
            ["white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn"],
            ["white_rook", "white_knight", "white_bishop", "white_queen", "white_king", "white_bishop", "white_knight", "white_rook"],
        ]
        this.pieces = []
        var index = 0
        this.col = 0;
        this.row = 0;
        this.board.forEach((array) => {
            this.col = 0
            array.forEach((type) => {
                this.pieces[index] = new Piece(this, this.col ,this.row, type, type)
                index++
                this.col++
            })
           this.row++
        })
    }


    update() {
        this.graphics.clear()
        this.drawRectInBoard()
    }
    drawRectInBoard() {
        var index = 0
        for (let i = 0; i < 8; i++) {

            for (let j = 0; j < 8; j++) {
                //console.log(2)
                if (index == 0) {
                    var color = Phaser.Display.Color.GetColor(254, 249, 231);
                    this.graphics.fillStyle(color);
                    this.graphics.fillRect(j * 100, i * 100, 100, 100)
                    index = 1
                } else {
                    var color = Phaser.Display.Color.GetColor(235, 152, 78);
                    this.graphics.fillStyle(color, 1);
                    this.graphics.fillRect(j * 100, i * 100, 100, 100)
                    index = 0
                }

            }
            if (index == 0) index = 1
            else index = 0
        }
    }
    gameOver(){
        this.scene.start('GameOver'); 
    }
}