import { notFound } from 'next/navigation'

interface ReviewsParams {
    params: {
        productId: number
        reviewId: number
    }
}

export default function Review({ params }: ReviewsParams) {
    if (params.reviewId > 1000 || params.productId > 100) {
        notFound()
    }

    return (
        <div>
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}