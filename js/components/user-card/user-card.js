
import Component from '../Component.js'
import templateCss from './user-card.css.js'
import templateHtml from './user-card.html.js'

export default class extends Component {
    constructor() {
        super({ templateContent: templateCss + templateHtml })
    
        this.showInfo = false
    }
    connectedCallback() {
        this.qs( '[data-image]' ).setAttribute( 'src', this.getAttr( 'avatar' ) )
        this.qs( '[data-title]' ).innerText = this.getAttr( 'name' )

        this.toggleInfo()
        this.qs( '[data-toggle]' ).addEventListener( 'click', this.toggleInfo.bind( this ))
    }
    toggleInfo() {
        this.qs( '[data-info]' ).style.display = this.showInfo ? 'block' : 'none'
        this.qs( '[data-toggle]' ).innerText = this.showInfo ? 'Hide info' : 'Show info'

        this.showInfo = !this.showInfo
    }
}
