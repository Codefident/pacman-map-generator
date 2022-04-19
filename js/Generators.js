class SheetGenerator {

    constructor(img, source_x, source_y, lastLine_x, lastLine_y) {
        this.img = img
        this.element = null
        this.source_x = source_x
        this.source_y = source_y
        this.lastLine_x = lastLine_x
        this.lastLine_y = lastLine_y
        this.init()
    }

    init() {

        let canvas = document.createElement("canvas")
        canvas.classList.add("sheetElement")
        canvas.classList.add("pointer")
        canvas.width = 27
        canvas.height = 27

        canvas.onmouseover = function () {
            this.style.opacity = 1
            this.style.border = "1px solid blue"
        }
        canvas.onmouseout = function () {
            this.style.opacity = 0.5
            this.style.border = "1px dotted gray"
        }

        let ctx = canvas.getContext("2d")

        if (!this.lastLine_x && !this.lastLine_y)
            ctx.drawImage(this.img, this.source_x, this.source_y, 47, 47, 0, 0, 27, 27)

        if (this.lastLine_x && this.lastLine_y)
            ctx.drawImage(this.img, this.source_x, this.source_y, 46, 46, 0, 0, 27, 27)

        if (this.lastLine_x && !this.lastLine_y)
            ctx.drawImage(this.img, this.source_x, this.source_y, 46, 47, 0, 0, 27, 27)

        if (!this.lastLine_x && this.lastLine_y)
            ctx.drawImage(this.img, this.source_x, this.source_y, 47, 46, 0, 0, 27, 27)

        document.getElementById("sheetContainer").appendChild(canvas)

        this.element = canvas
        this.element.onclick = function () {
            let canvas_draw = [this]
            drawing.draw(canvas_draw)
        }
    }

}

class FieldGenerator {
    constructor(id, num) {
        this.srcCanvas = null
        this.id = id
        this.element = null
        this.num = parseInt(num)
        this.isSelected = false
        this.generateMap(id, num)
    }

    generateMap(id, num) {
        let canvas = document.createElement("canvas")
        canvas.classList.add("mapElement")
        canvas.classList.add("pointer")
        canvas.id = id
        canvas.width = 27
        canvas.height = 27
        canvas.setAttribute("data-num", num)
        canvas.addEventListener("mouseover", _inmouse)
        canvas.addEventListener("mouseout", _outmouse)

        document.getElementById("mapContainer").appendChild(canvas)
        this.element = canvas
    }
}

class MapGenerator {
    constructor() {
        this.init()
        this.mapCanvases = []
    }

    init() {
        var firstElement
        var firstElementPos

        document.getElementById("mapContainer").onmousedown = function (e) {

            if (!keyEvents.ctrlPressed && e.button != 2)
                select.unselect()

            let selecting = true
            firstElementPos = e
            firstElement = e.target
            select.div_display(firstElementPos)

            this.onmousemove = function (e) {

                if (selecting)
                    select.div_size(firstElementPos, e)

                this.onmouseup = function (e) {
                    selecting = false
                    select.select_many(firstElement, e.target)
                    select.div_remove()
                }
            }

            document.getElementById("select").onmousemove = function (e) {

                if (selecting)
                    select.div_size(firstElementPos, e)

                this.onmouseup = function (e) {
                    selecting = false
                    select.select_many(firstElement, e.target)
                    select.div_remove()
                }
            }
        }
    }
}