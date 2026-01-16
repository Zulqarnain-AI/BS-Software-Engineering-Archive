import { Link } from "react-router"
function Home() {

    return (
        <>
            <nav style={{display:"flex", justifyContent:"center", gap:"20px", backgroundColor:"#60a856", height:"30px",fontSize:"25px",fontWeight:'bold'}}>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/countdown'>Count DounTimer</Link>
                <br />
                <Link to='/studentlist'>student list</Link>
            </nav>

            <h1>this is home page</h1>

        </>
    )
}

export default Home