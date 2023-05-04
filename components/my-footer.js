let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");
export default class myfooter extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        console.log("etiqueta footer creada");
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e) : console.log("error en la line 423");
    }
    sendMessage(e){
        alert("Esta seccion es el footer, aqui podras encontrar informacion respecto al autor de la pagina web, ademas los respectivos derechos de autor")
    }
    connectedCallback(e){
        Promise.resolve(myfooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mybuttom = this.shadowRoot.querySelector(".botonBordeadoFooter");
            this.mybuttom.addEventListener("click", this.hadledEvent.bind(this))
        })
    }
}

customElements.define(name, myfooter);