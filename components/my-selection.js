let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");
export default class myselection extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        console.log("etiqueta selection creada");
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e) : console.log("no sirve :c");
    }
    sendMessage(e){
        alert("Esta seccion es la Selection, el lugar donde podras ver diferentes botones de contacto");
    }
    connectedCallback(){
        Promise.resolve(myselection.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mybuttom = this.shadowRoot.querySelector(".botonBordeadoSeleccion");
            this.mybuttom.addEventListener("click", this.hadledEvent.bind(this))
        })
    }
}

customElements.define(name, myselection);