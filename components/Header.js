import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        // moralisAuth is used to tell whether we want to connect to the server or not.
        <div className="p-5 border-y-2 flex flex-row">
            <h1 className="py-4 px-4 font-blog text-3xl">Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4"><ConnectButton moralisAuth={false} /></div>
        </div>
    )
}
