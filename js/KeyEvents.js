//obsługa klawiszy

class KeyEvents {
    constructor() {
        this.ctrlPressed = false
        this.initKeyEvents()
        this.ctrl()
        this.isCopied = false
        this.copySrc = []
        this.cp_paste = false
    }

    initKeyEvents() {
        document.addEventListener("keydown", function (e) {

            switch (e.key) {

                case "Escape":
                    keyEvents.esc()
                    break

                case "Delete":
                    keyEvents.delete()
                    break

                case "c":
                    if (keyEvents.ctrlPressed)
                        keyEvents.copy()
                    break

                case "v":
                    if (keyEvents.ctrlPressed) {
                        keyEvents.paste()
                    }
                    break

                case "x":
                    if (keyEvents.ctrlPressed) {
                        keyEvents.cut()
                    }
                    break
            }
        })
    }

    esc() {
        menu.hideMenu()
    }

    delete() {
        drawing.clear()
    }

    copy() {
        this.isCopied = true
        this.copySrc = []
        for (let i in select.selected) {
            let num = parseInt(select.selected[i].getAttribute("data-num"))
            this.copySrc[i] = { element: select.selected[i], srcCanvas: mapGenerator.mapCanvases[num].srcCanvas }
        }
    }

    paste() {
        if (this.isCopied) {
            this.cp_paste = true
            for (let el of document.querySelectorAll(".mapElement")) {
                el.removeEventListener("mouseover", _inmouse)
                el.addEventListener("mouseover", _inmouseP)
            }
        }
    }

    pasteFinished() {
        this.cp_paste = false
        for (let el of document.querySelectorAll(".mapElement")) {
            el.removeEventListener("mouseover", _inmouseP)
            el.addEventListener("mouseover", _inmouse)
        }
    }

    cut() {
        this.copy()
        this.delete()
    }

    ctrl() {    //odpowiada też za Apple'owską Metę
        document.body.onkeydown = function (e) {

            if (e.ctrlKey || e.metaKey)
                keyEvents.ctrlPressed = true

            document.body.onkeyup = function () {
                keyEvents.ctrlPressed = false
            }
        }

    }
}