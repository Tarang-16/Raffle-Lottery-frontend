//A component is a function that returns UI elements.
import { useMoralis } from "react-moralis" // useMoralis is a react hook that keeps track of state in our application.
import { useEffect } from "react"

// Hooks rerender the website on change of variable. If we create a variable and change its state in different functions, we will update only
// the backend. But using Hooks, helps us to update the frontend as well.
export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis() // isWeb3Enabled is a variable part of our useMoralis hook.

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            // onAccountChanged takes function as parameters.
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }
        })
    }, [])

    return (
        <div>
            {account ? (
                <div>Connected to {account}</div> // for writing javascript use {}.
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect!
                </button>
            )}
        </div>
    )
}
