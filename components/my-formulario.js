import config from "./config.js"
export default class myFrom extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(myFrom.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});

    }
    handleEvent(e){
        (e.type ==="submit") ? this.sendMessage(e) : console.log("no existe pe");
    }
    sendMessage(e){
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myFrom.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            console.log(this.shadowRoot.querySelector("[data-accion]"));
            this.myfrom = this.shadowRoot.querySelector("form");
            this.myfrom.addEventListener("submit", this.handleEvent.bind(this));
        })
        console.log("etiqueta from creada");
    }
}

customElements.define(config.name(myFrom.url), myFrom);
