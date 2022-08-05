# TP ecommerce

## Guide des étapes clés du développement

### Page D'accueil
1. <u>Lister tous les produits</u>
    
    - Endpoint `products`: `GET /api/v1/products`
    - Réponse `products` : Tableau de produits de la forme ci-dessous
    ```{
   "id": number,
   "name": string,
   "manufacturer": string,
   "imageUrl": string,
   "price": number,
   "description": string,
   "slug": string
   }


    
   
2. <u>Lister les categories dans le dropdown</u>

    - Endpoint `categories` : `GET /api/va/categories`
    - Réponse `categories`
    ````{
     "id": 4,
     "name": "books",
     "slug": "books"
     }

3. <u>Lister les produits par catégorie</u>
 
  - Endpoint :  `GET /api/v1/products?category=[category_slug]` où `slug` correpond au `slug` de la `categorie`
  
  - Réponse : Même tableau que celui du `point 1`.

4. <u>Rechercher les produits par `name` ou `manufacturer`.</u>

  
   Ici, les utilisateurs peuvent dans la barre de rechercher écrire soit le nom du produit(`name`), ou son fabricant(`manufacturer`).
   
   - Endpoint : `GET /api/v1/products?search?searchTerm=[valeur de l'input]`

5. <u>Ouvrir la page détails du produit quand l'utilisateur clique sur `voir`</ul>

   - Endpoint : `GET /api/v1/products/13`
   - Réponse : Un objet de la forme ci-dessous:
   ```` "id": number,
   "name": string,
   "manufacturer": string,
   "imageUrl": string,
   "price": number,
   "description": string,
   "slug": string
   }
Pour les points `2,3 et 4` la page doit être mise à jours sans pouvoir recharger.

### Exemple d'execution
[Cliquer ici pour voir la vidéo](https://drive.google.com/file/d/1ettmTcpUtom_IKdWqMkCu9HadxsS0hbV/view)