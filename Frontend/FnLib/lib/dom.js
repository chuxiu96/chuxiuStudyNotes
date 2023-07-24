class Dom {
    dom

    constructor(query) {
        this.init(query)
    }

    init(query) {
        this.dom = document.querySelector(query)
        const tagInwhiteList = [null, 'script']
        if (tagInwhiteList.includes(this.dom.nextElementSibling)) {
            this.dom = document.querySelectorAll(query)
        }
    }

    hover() {
        const hoverStyle = `color: blue`
        this.dom.addEventListener('mouseover', () => {
            this.dom.setAttribute('style', hoverStyle)
        })

        this.dom.addEventListener('mouseover', () => {
            this.dom.removeAttribute('style', hoverStyle)
        })
    }

    addClass(classStyle) {
        this.dom.classList.add(classStyle)
    }
}

export { Dom }
