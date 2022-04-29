import { useState } from "react";

function Wallet({ addMoney }) {
    const [value, setValue] = useState(0)

    function handleSubmit(e) {
        e.prevent.default(); 
            addMoney(value)
        setValue(0)
    }

    function handleChange(e) {
        const value = parseInt(e.target.value, 10)
        setValue(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={value} onChange={handleChange}/>
            <button type="submit">Add $ to Wallet</button>
        </form>
    )
}

export default Wallet