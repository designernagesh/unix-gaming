import { Link } from 'react-router-dom'

function ProductsPage() {
    return (
        <section className='products-page'>
            <div className='container'>
                <h1 className='title'>
                    Products Page
                </h1>
                <Link to="/">
                    <button type="button" className="btn">
                        Back to Home
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ProductsPage