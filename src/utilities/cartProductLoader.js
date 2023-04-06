import { getShoppingCart } from "./localStorage"

const cartProductLoader = async () => {
    const loadedProducts = await fetch('https://dummyjson.com/products')
    const products = await loadedProducts.json()
    const storedCart = getShoppingCart()

    let storedProductArr = []
    for(const id of storedCart) {
      
      const addedProduct = products.products.find(pd => pd.id === id.id)
      storedProductArr.push({...addedProduct, quantity: id.quantity})
    }
    return storedProductArr
}

export default cartProductLoader