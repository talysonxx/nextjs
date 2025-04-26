import {notFound} from "next/navigation"

interface InfoParams {
    params: {
        productId: number
    }
}

export default function Info({ params }: InfoParams) {
    if (params.productId > 100) {
        notFound()
    }

    return (
        <h1>página de informações sobre o produto {params.productId}</h1>
    )
}