var drawing
var mapGenerator
var select
var menu
var keyEvents

//funkcje potrzebne do hoverów canvasów na planszy
var _inmouse = function () {
    if (!this.classList.contains("choosen"))
        this.style.border = "1px solid blue"
}

var _outmouse = function () {
    if (!this.classList.contains("choosen"))
        this.style.border = "1px dotted gray"
}

var _inmouseP = function () {
    if (!this.classList.contains("choosen"))
        this.style.border = "1px solid limegreen"
}

window.addEventListener('DOMContentLoaded', (event) => {

    let spritesheet = new Image()
    spritesheet.src = "spritesheet.png"

    drawing = new Drawing()
    mapGenerator = new MapGenerator()
    select = new Select()
    menu = new Menu()
    keyEvents = new KeyEvents()

    document.getElementById("auto").onclick = function () {
        select.unselect()
    }

    //x=32      //gra
    //y=20      //44x44

    spritesheet.onload = function () {

        for (let y = 0; y < 20; y++)
            for (let x = 0; x < 16; x++) {
                if (y == 19)
                    new SheetGenerator(spritesheet, 1 + x * 48, 1 + y * 48, false, true)
                else
                    new SheetGenerator(spritesheet, 1 + x * 48, 1 + y * 48, false, false)
            }

        for (let y = 0; y < 20; y++)
            for (let x = 16; x < 32; x++) {

                if (x != 31 && y != 19)
                    new SheetGenerator(spritesheet, 1 + x * 48, 1 + y * 48, false, false)

                if (x == 31 && y == 19)
                    new SheetGenerator(spritesheet, 1 + x * 48, 1 + y * 48, true, true)

                if (x != 31 && y == 19)
                    new SheetGenerator(spritesheet, 1 + x * 48, 1 + y * 48, false, true)

                if (x == 31 && y != 19)
                    new SheetGenerator(spritesheet, 1 + x * 48, 1 + y * 48, true, false)
            }

        let num = 0
        for (let y = 0; y < 44; y++)
            for (let x = 0; x < 44; x++) {
                let id = x + "_" + y
                mapGenerator.mapCanvases.push(new FieldGenerator(id, num++))
            }

    }

});