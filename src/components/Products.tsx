import '../styles/ProductItem.css'

interface Product {
  nameProduct: string,
  imageProduct: string,
  priceProduct: string
}

export function Products ({ nameProduct, imageProduct, priceProduct }: Product) {
  return (
    <>
        <div className="product-container">
          <picture className="product-img">
            <img src={ import.meta.env.STRAPI_HOST +  imageProduct } alt={nameProduct} />
          </picture>
          <div className="info-container">
            <span>{nameProduct}</span>
            <span>${priceProduct}</span>
          </div>
        </div>
    </>
    
  )
}


