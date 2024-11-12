import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
interface HistoryInterface {
    query : string,
    response  : string 
}

export function History({sessionId} : {sessionId : string}) {

    const [history,setHistory] = useState<HistoryInterface[]>([])
    useEffect(()=> {
        axios(`http://localhost:8000/history/${sessionId}`)
        .then((response) => {
            setHistory(response.data.history)
        })
    },[])
    return <>
            <div className="button-container">
                <Button onClick={()=>{}}>New Chat</Button>
            </div>
        {
            history.map((history,idx) => (
                <div key = {idx} className="session-div">
                    <p>
                    {history.query}
                    </p>
                </div>
            ))
        }

    </>
}