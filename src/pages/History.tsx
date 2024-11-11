import axios from "axios";
import { useEffect, useState } from "react";

export function History({sessionId} : {sessionId : string}) {

    const [history,setHistory] = useState([])
    useEffect(()=> {
        axios(`http://localhost:8000/history/${sessionId}`)
        .then((response) => {
            setHistory(response.data.history)
        })
    },[])
    return <>
    {history}
    </>
}