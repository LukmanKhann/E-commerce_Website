import { useParams } from "react-router-dom"
import productData from "./db.json"
const ShoppingCart = () => {
    const {id} = useParams()

    const selectProduct = productData.find((product)=> product.id === parseInt(id,10))
    if(!selectProduct){
        return <h3>product not found with this id</h3>
    }
  return (
    <div>
      <h2>Product Details</h2>
      <img src={selectProduct.image} alt={selectProduct.name} />
      <p>Name: {selectProduct.name}</p>
      <p>Price: ${selectProduct.price}</p>
      <p>Price: ${selectProduct.rom}</p>
      <p>Price: ${selectProduct.ram}</p>
      <p>Price: ${selectProduct.camera}</p>
      <p>Price: ${selectProduct.processor}</p>
     
    </div>
  )
}

export default ShoppingCart