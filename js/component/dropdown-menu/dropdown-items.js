export function CreateDropdownItemCategory (category){
    const {name, id} = category
    const linkCategory = document.createElement("a");
    const categoryItem = document.createElement("li");
    linkCategory.classList.add("dropdown-item");
    linkCategory.innerText = name;
    linkCategory.href = `?category-id=${id}`;
    categoryItem.appendChild(linkCategory);
    return categoryItem;
}




    