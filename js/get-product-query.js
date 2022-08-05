export function GetProductQuery ()
{
    let productQuery  = "";
    const urlParam = new URLSearchParams(location.search);
    const category = urlParam.get("category");
    
    if(category)
    {
        productQuery = `?category=${category}`;
        console.log(category);
    }
    return productQuery;
}