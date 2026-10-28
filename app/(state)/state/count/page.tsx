import { useState } from "react";

export default function page() {
    let number = 0

export default function page() {
    const [number. setNumber] = useState<number>(0)
    const increase =() => setNumber(number + 1)
    const decrease =() => setNumber(number - 1)

}

    return (
        <>
            <button
                className="w-25 h-25 bg-blue-500 active:bg-blue-700"
                onClick={decrease}
            >-1</button>
            <h1>{number}</h1>
            <button
                className="w-25 h-25 bg-blue-500 active:bg-blue-700"
                onClick={increase}
                >+1</button>
        </>
    );
}