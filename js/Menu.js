class Menu {
    constructor() {
        this.initMenuEvent()
    }

    initMenuEvent() {

        document.body.oncontextmenu = function (e) {
            e.preventDefault()
            menu.showMenu()
        }

        document.body.onclick = function () {
            menu.hideMenu()
        }

        document.getElementById("cut").onclick = function () {
            keyEvents.cut()
        }

        document.getElementById("copy").onclick = function () {
            keyEvents.copy()
        }

        document.getElementById("paste").onclick = function () {
            keyEvents.paste()
        }

        document.getElementById("delete").onclick = function () {
            keyEvents.delete()
        }

        document.getElementById("exitMenu").onclick = function () {
            menu.hideMenu()
        }

    }

    showMenu() {
        document.getElementById("menu").removeAttribute("hidden")
        document.getElementById("sheetContainer").style.opacity = 0.3
        document.getElementById("mapContainer").style.opacity = 0.3
        document.getElementById("upSCr").style.opacity = 0.3
        document.getElementById("upMap").style.opacity = 0.3
    }

    hideMenu() {
        document.getElementById("menu").setAttribute("hidden", "")
        document.getElementById("sheetContainer").style.opacity = 1
        document.getElementById("mapContainer").style.opacity = 1
        document.getElementById("upSCr").style.opacity = 1
        document.getElementById("upMap").style.opacity = 1
    }
}