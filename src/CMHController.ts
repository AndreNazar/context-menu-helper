class CMHController {
    block:  HTMLElement | null = null
    cmh:    HTMLElement | null = null
    event:  MouseEvent  | null = null

    constructor(
        _block:  HTMLElement | null, 
        _cmh:    HTMLElement | null, 
        _event:  MouseEvent  | null
    ) {
        this.block  = _block
        this.cmh    = _cmh
        this.event  = _event
    }
    
    public openContextMenu() {
        if(this.cmh && this.event){
            const x      = this.event.clientX
            const y      = this.event.clientY
            const width  = this.cmh.clientWidth
            const height = this.cmh.clientHeight

            this.cmh.classList.add("active")

            if(this.getSideHorizontal() === "L")
                this.cmh.style.left = `${x - width}px`
            else
                this.cmh.style.left = `${x}px`

            if(this.getSideVertical() === "U")
                this.cmh.style.top = `${y - height}px`
            else
                this.cmh.style.top = `${y}px`
            
        }
    }

    public closeContextMenu() {
        this.cmh?.classList.remove("active")
    }

    private getSideHorizontal(){
        const cmhWidth = this.cmh?.clientWidth
        const cmhPosX = this.event?.clientX
        const screenWidth = window.innerWidth
        
        if(cmhPosX && cmhWidth && screenWidth){
            if((screenWidth - (cmhPosX + cmhWidth)) < 5) return "L"
            else return "R"
            
        }
        return "R"
    }

    private getSideVertical(){
        const cmhHeight = this.cmh?.clientHeight
        const cmhPosY = this.event?.clientY
        const screenHeight = window.innerHeight

        if(cmhPosY && cmhHeight && screenHeight){
            if((screenHeight - (cmhPosY + cmhHeight)) < 20 && (screenHeight - (screenHeight - cmhPosY)) > cmhHeight) return "U"
            else return "D"
        }
        return "D"
    }
}
export default CMHController