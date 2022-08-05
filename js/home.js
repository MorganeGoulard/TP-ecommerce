import { CreateDropdownItemCategory } from "./component/dropdown-menu/dropdown-items.js";

const $dropdownMenu = document.querySelector(".dropdown-menu");
//<ul class="dropdown-menu"></ul>

axios.get("http://localhost:3000/api/v1/categories").then(function (response){
    const categories = response.data;
    console.log(categories)
    for(let category of categories){
        const $dropdownMenuItem = CreateDropdownItemCategory(category);
        $dropdownMenu.appendChild($dropdownMenuItem);
    }
    
})