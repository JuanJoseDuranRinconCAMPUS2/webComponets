import myTable from "../components/my-tabla.js"
import myheader from "../components/my-header.js";
import mynav from "../components/my-nav.js";
import mysection from "../components/my-section.js";
import myselection from "../components/my-selection.js";
import myfooter from "../components/my-footer.js";
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

