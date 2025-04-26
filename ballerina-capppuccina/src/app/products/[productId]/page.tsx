interface InfoParams {
    params: {
        productId: number
    }
}

export default function Info({ params }: InfoParams) {
    return (
        <h1>página de informações sobre o produto {params.productId}</h1>
    )
}