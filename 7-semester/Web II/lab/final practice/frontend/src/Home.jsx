import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
        <Link to="/">Home</Link>
        <h1>this is home page</h1>
        <Link to="/about">about</Link>
        </>
    )
}