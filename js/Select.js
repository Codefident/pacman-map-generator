//zaznaczanie elementów

class Select {
    constructor() {
        this.selected = []
        this.isSelected = false
    }

    div_display(src) {

        this.div_remove()

        let div = document.createElement("div")
        div.id = "select"

        div.style.backgroundColor = "white"
        div.style.opacity = 0.3

        div.style.position = "absolute"
        div.style.left = src.pageX + "px"
        div.style.top = src.pageY + "px"

        document.body.appendChild(div)

    }

    div_size(src, dest) {

        let div = document.getElementById("select")

        let w = dest.pageX - src.pageX
        let h = dest.pageY - src.pageY

        try {
            if (w < 0 && h < 0)
                div.style.transform = "translate(-100%, -100%)"
            else if (w < 0 && h > 0)
                div.style.transform = "translate(-100%, 0)"
            else if (w > 0 && h < 0)
                div.style.transform = "translate(0, -100%)"
            else
                div.style.transform = "translate(0,0)"

            div.style.width = (Math.abs(w) - 1) + "px"
            div.style.height = (Math.abs(h) - 1) + "px"
        }
        catch (err) { return }

    }

    div_remove() {

        try {
            let div = document.getElementById("select")
            div.remove()
        } catch (error) { return }
    }

    select_many(firstElement, lastElement) {
        if (!keyEvents.cp_paste) {
            let firstElementId = firstElement.id.split("_")
            let lastElementId = lastElement.id.split("_")

            if (parseInt(firstElementId[0]) < parseInt(lastElementId[0])) {
                var sourceX = parseInt(firstElementId[0])
                var destX = parseInt(lastElementId[0])
            }
            else {
                var sourceX = parseInt(lastElementId[0])
                var destX = parseInt(firstElementId[0])
            }

            if (parseInt(firstElementId[1]) < parseInt(lastElementId[1])) {
                var sourceY = parseInt(firstElementId[1])
                var destY = parseInt(lastElementId[1])
            }
            else {
                var sourceY = parseInt(lastElementId[1])
                var destY = parseInt(firstElementId[1])
            }

            if (Number.isNaN(sourceX) || Number.isNaN(sourceY) || Number.isNaN(destX) || Number.isNaN(destY)) {
                this.div_remove()
            }
            else {
                for (let y = sourceY; y <= destY; y++)
                    for (let x = sourceX; x <= destX; x++) {
                        let el = document.getElementById(x + "_" + y)
                        el.classList.add("choosen")
                        el.style.border = "1px solid red"
                        let num = parseInt(el.getAttribute("data-num"))
                        mapGenerator.mapCanvases[num].isSelected = true
                        this.selected.push(el)
                    }
                this.isSelected = true
            }
        }
        else if (keyEvents.isCopied) {
            this.selected.push(firstElement)
            this.isSelected = true
            drawing.paste()
        }
    }

    unselect() {
        for (let el of document.querySelectorAll(".choosen")) {
            el.classList.remove("choosen")
            el.style.border = "1px dotted gray"
        }
        this.selected = []
        this.isSelected = false
        for (let el of mapGenerator.mapCanvases)
            el.isSelected = false
    }

}