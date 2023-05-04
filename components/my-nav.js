let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");
export default class mynav extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
        console.log("etiqueta nav creada");
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMensagge(e) : console.log("error");
    }
    sendMensagge(e){
        alert("Esta seccion es la Nav, en esta encontraras informacion lateral, util e independiente de la section")
    }
    connectedCallback(){
        Promise.resolve(mynav.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mybutton = this.shadowRoot.querySelector(".botonBordeadoNav");
            this.mybutton.addEventListener("click", this.hadledEvent.bind(this))
        })
    }
}

customElements.define(name, mynav);
