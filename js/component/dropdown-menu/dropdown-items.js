export function CreateDropdownItemCategory (category){
    const {name, slug} = category
    const linkCategory = document.createElement("a");
    const categoryItem = document.createElement("li");
    
    linkCategory.classList.add("dropdown-item");
    linkCategory.innerText = name;
    linkCategory.href = `?category=${slug}`;
    categoryItem.appendChild(linkCategory);
    return categoryItem;
}




    