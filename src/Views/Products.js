import React from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Products() {
    const url = `https://5f6c91b334d1ef0016d5845b.mockapi.io/products`

    let products = useAxiosGet(url)
    let content = null

    if (products.error) {
        content = <p>There was an error, plese refresh or try again later</p>
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Products
            </h1>
            {content}
        </div>
    )
}

export default Products