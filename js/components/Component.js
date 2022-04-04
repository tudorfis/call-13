
export default class extends HTMLElement {
    constructor({ templateContent }) {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        
        const template = document.createElement( 'template' )
        template.innerHTML = templateContent
        this.shadow.appendChild( template.content.cloneNode( true ) )
    }
    qs( query ) {
        return this.shadow.querySelector( query )
    }
    getAttr( attribute ) {
        return this.getAttribute( attribute )
    }
}