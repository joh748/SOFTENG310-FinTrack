import { useEffect, useState } from "react";
import axios from "axios";

export default function CurrentBalance() {
    const [balance, setBalance] = useState(0);  

    useEffect(() => {
        axios.get("http://localhost:4000/user/balance")
            .then(response => {
                setBalance(response.data.result.balance);
            }).catch(error => {
                // If the user is not logged in (due to directly accessing dashboard path or token expiring), redirect to the login page
                window.location.href = "/login";
            });
        }, [balance]);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-extrabold">Current Balance: ${balance}</h2>
        </div>
    );

}