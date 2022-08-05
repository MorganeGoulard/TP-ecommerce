export function CreateProductCard(product) {
  //const {id,name,manufacturer,imageUrl,price,description,slug} = product;
  const card = document.createElement("div");
  card.classList.add("card", "mb-3", "col", "col-xl-2","col-lg-4","col-md-6","col-sm-8","col-12");
  const cardImage = CreateCardImage(product);
  const cardBody = CreateCardBody(product);
  card.append(cardImage,cardBody);
  return card;
}

// Destructuration directe en paramètre
function CreateCardBody({name,price,id}) {
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = CreateCardTitle(name);
  const cardPrice = CreateCardPrice(price);
  const cardButton = CreateCardButton(id);
  cardBody.append(cardTitle,cardPrice,cardButton);
  return cardBody;
}

function CreateCardImage({name, imageUrl}) {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = imageUrl;
  cardImage.alt = name;
  return cardImage;
}

function CreateCardTitle(name) {
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;
  return cardTitle;
}

function CreateCardPrice(price) {
  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.innerText = `${price} €` ;
  return cardPrice;
}

function CreateCardButton(id) {
  const cardButton = document.createElement("a");
  cardButton.classList.add("btn","btn-primary");
  cardButton.href = `/pages/details.html?product-id=${id}`;
  cardButton.innerText = "Voir";
  return cardButton;
}