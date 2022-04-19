//klasa odpowiada za rysowanie wybranych elementów na planszy

class Drawing {
    constructor() { }

    draw(sCanvas) {
        if (select.isSelected) {

            let lastEl
            let i = 0
            for (let el of select.selected) {

                if (el !== null) { //wykraczanie poza zakres
                    let ctx = el.getContext("2d")

                    if (keyEvents.cp_paste) {
                        let srcCanvas = sCanvas[i].srcCanvas
                        if (srcCanvas !== null) {
                            ctx.drawImage(srcCanvas, 0, 0)
                            let num = parseInt(el.getAttribute("data-num"))     //map - prawa strona, przypisanie source
                            mapGenerator.mapCanvases[num].srcCanvas = srcCanvas
                        }
                    }
                    else {
                        ctx.drawImage(sCanvas[0], 0, 0)
                        let num = parseInt(el.getAttribute("data-num"))
                        mapGenerator.mapCanvases[num].srcCanvas = sCanvas[0]
                    }

                    el.classList.remove("choosen")
                    el.style.border = "1px dotted gray"
                    lastEl = el
                }
                i++
            }

            select.unselect()

            if (document.getElementById("auto").checked && !keyEvents.cp_paste) {

                select.isSelected = true

                let destPosition = lastEl.id.split("_")
                let x = parseInt(destPosition[0]) + 1
                let y = parseInt(destPosition[1])

                if (x == 44) {
                    x = 0
                    y++
                }
                if (y == 44)
                    y = 0

                let next_el = document.getElementById(x + "_" + y)
                select.selected = [next_el]
                next_el.style.border = "1px solid red"
                next_el.classList.add("choosen")
                let num = parseInt(next_el.getAttribute("data-num"))
                mapGenerator.mapCanvases[num].isSelected = true
            }
        }
    }

    paste() {
        if (select.isSelected && keyEvents.cp_paste) {

            let copySrcId = keyEvents.copySrc[0].element.id.split("_")
            let firstElementId = select.selected[0].id.split("_")

            let vectX = parseInt(firstElementId[0]) - parseInt(copySrcId[0])
            let vectY = parseInt(firstElementId[1]) - parseInt(copySrcId[1])

            for (let i = 1; i < keyEvents.copySrc.length; i++) {

                let el_id = keyEvents.copySrc[i].element.id.split("_")
                el_id[0] = parseInt(el_id[0]) + vectX
                el_id[1] = parseInt(el_id[1]) + vectY

                let el = document.getElementById(el_id[0] + "_" + el_id[1])
                select.selected.push(el)

            }

            this.draw(keyEvents.copySrc)
            keyEvents.pasteFinished()

        }
    }

    clear() {
        if (select.isSelected) {
            for (let el of select.selected) {
                let ctx = el.getContext("2d")
                let num = parseInt(el.getAttribute("data-num"))
                mapGenerator.mapCanvases[num].srcCanvas = null
                ctx.clearRect(0, 0, el.width, el.height)
            }
            select.unselect()
        }
    }

}