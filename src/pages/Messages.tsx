import { useState } from "react"
import Button from "../components/Button";
import QueryBox from "../components/QueryBox";
import Input from "../components/Input";
import axios from "axios";
import BASE_URL from "../conts";


export default function Messages() {
    interface Qna {
        query : string,
        response : string
    }
    const [qna, setQna] = useState<Qna[]>([{query : "Who are you",response : "I am your assistant"}])
    const [inputQuery,setInputQuery] = useState("");
    async function queryGPT() {
        let receivedResponse = "sahil";
        const payload = new URLSearchParams()
        payload.append('query',inputQuery)
        let newChat : Qna =  {
            query : inputQuery,
            response  : "loading" 
        }
        setQna([...qna,newChat])
        
        try { 
            receivedResponse =  await axios.post(BASE_URL,payload,{
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            newChat.response = receivedResponse
            // setQna([...qna,newChat])
        }
        catch(e)  {
            receivedResponse = "Not able to compute response"
            newChat.response = receivedResponse
            // setQna([...qna,{query : inputQuery, response : receivedResponse}])
        }
        finally {
            setInputQuery("")
        }

    }


    return <div className="message-container">
        <div className="qna-box">
            {
                qna.map((item,idx) => (
                    <div key={idx} className="qna">
                        <QueryBox>{item.query}</QueryBox>
                        <p>{item.response}</p>
                    </div>
                ))
            }
        </div>
        <div className="query-input">
            <Input type="text"  placeholder="Message Gpt" value={inputQuery} onChange={e => setInputQuery(e.target.value)} className="input-tag"/>
            <Button onClick={queryGPT}> Send</Button>
        </div>
    </div>
}