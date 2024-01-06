import { Link } from 'react-router-dom'

function CommunityPage() {
    return (
        <section className='products-page'>
            <div className='container'>
                <h1 className='title'>
                    Community Page
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

export default CommunityPage