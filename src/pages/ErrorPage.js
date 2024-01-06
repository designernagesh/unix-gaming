import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <section className='error-page'>
            <div className='container'>
                <h1 className='title'>
                    Error Page
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

export default ErrorPage
