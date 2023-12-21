import Link from "next/link";


const NotFound = () => {

    return (
        <div className="not-found">
            <h1>Opps...</h1>
            <h2>this page cannot be found :(</h2>
            <p>Go back to the <Link href='/'>Home Page</Link></p>
        </div>
    )
}

export default NotFound;