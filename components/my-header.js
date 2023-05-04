import config from "./config.js"
export default class myheader extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(myheader.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e) : console.log("Error 404")
    }
    sendMessage(e){
        alert("Esta seccion es el header, la seccion donde veras el logo de la pagina y la organizacion de la informacion presentada en la pagina");

    }
    connectedCallback(){
        Promise.resolve(myheader.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mybuttom = this.shadowRoot.querySelector(".botonBordeado");
            this.mybuttom.addEventListener("click", this.hadledEvent.bind(this))
        })
        console.log("etiqueta header creada");
    }
}

customElements.define(config.name(myheader.url), myheader);
