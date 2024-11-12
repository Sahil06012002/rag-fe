
import { History } from "./History"
import Messages from "./Messages"

export default function Main() {

    return <div className = "container">
        <div className="history">
            <History sessionId="f7ebf403-5dab-4e56-b5c5-17a62ace674f"/>
        </div>
        <div className="content">
            <Messages></Messages>
        </div>
    </div>

}