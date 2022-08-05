import { CreateDropdownItemCategory } from "./component/dropdown-menu/dropdown-items.js";
import { CreateProductCard } from "./component/product-list/product-card.js";
import { BASE_URL } from "./consts.js";
import { GetProductQuery } from "./get-product-query.js";

const $dropdownMenu = document.querySelector(".dropdown-menu");
const $productCards = document.querySelector("#product-cards");
//<ul class="dropdown-menu"></ul>
const submitBTN = document.querySelector("#submit_btn");
const userResearch = document.querySelector("#research");

submitBTN.addEventListener("click", function(event)
{
    console.log(submitBTN);
    event.preventDefault();

    $productCards.innerHTML = "";

    axios.get(`${BASE_URL}/products/search?searchTerm=${userResearch.value}`)
    .then((response)=>
    {
        const products =response.data;
        for(let product of products){
            const $cardItem = CreateProductCard(product);
            $productCards.appendChild($cardItem);
        }
    })
})

axios.get(`${BASE_URL}/categories`).then(function (response){
    const categories = response.data;
    for(let category of categories){
        const $dropdownMenuItem = CreateDropdownItemCategory(category);
        $dropdownMenu.appendChild($dropdownMenuItem);
    }
})

const productQuery = GetProductQuery();
console.log(productQuery);

axios.get(`${BASE_URL}/products${productQuery}`).then((response)=>{
    const products =response.data;
    for(let product of products){
        const $cardItem = CreateProductCard(product);
        $productCards.appendChild($cardItem);
    }
})

