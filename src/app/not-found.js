import Link from "next/link"

const NotFoundPage = () => {
return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <h1>Custom Not Found Page</h1>
        <p>Take a look at <Link href="/cars" className="text-blue-500">our cars</Link></p>
    </div>
)
}
export default NotFoundPage