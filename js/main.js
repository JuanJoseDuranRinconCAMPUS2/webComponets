import myTable from "../components/my-tabla.js"
import myheader from "../components/my-header.js";
import mycomponents from "../components/my-components.js";
async function system() {
    const URL = `./json/geshin.json`;
    const promises = [];
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    data.personajes.forEach(element => {
        console.log(element);
    });
}

system()

