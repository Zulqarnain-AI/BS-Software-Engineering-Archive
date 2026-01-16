import { useState, useEffect } from "react";

function StudentList() {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        fetch('https://691c637c3aaeed735c90a3a2.mockapi.io/Students').then((data) => {
            return data.json()
        }).then((data) => {
            setResponse(data)
        }).catch(error => {
            console.error("There was an error fetching the data:", error);
        });
    }, [])
    if (!response) return <h1>loadeing...</h1>
    return (
        <>
            <button onClick={() => window.history.back()}>back</button>
            {

                response.map((item, index) => (
                    <div key={index}>
                        <h3>Name: {item.name}</h3>
                        <p>Address:{item.Address}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default StudentList