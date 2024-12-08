import { products } from '@/components/forth'
import { ProductCard } from '@/components/ProductCard'
import ProductDetails from '@/components/productDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProductDetails />
      <h1 className='text-2xl text-center font-bold my-3'>Related Products</h1>
      <div className="grid grid-cols-1 p-10 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}

export default page
