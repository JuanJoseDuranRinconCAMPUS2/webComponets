let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");
export default class mysection extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e): console.log("boton no funcional");
    }
    sendMessage(e){
        alert("Esta seccion es la Section, donde encontraras informacion relevante y alguna que otra imagen de referencia")
    }
    connectedCallback(){
        Promise.resolve(mysection.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mybuttom = this.shadowRoot.querySelector(".botonBordeadoSection");
            this.mybuttom.addEventListener("click", this.hadledEvent.bind(this))
        })
        console.log("etiqueta section creada");
    }
}

customElements.define(name, mysection);
