import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {
    const { id } = useParams()
    const url = `https://5f6c91b334d1ef0016d5845b.mockapi.io/products/${id}`

    let product = useAxiosGet(url)

    let content = null


    if (product.error) {
        content = <p>There was an error, plese refresh or try again later</p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {
        return (
            content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )


}

export default Product