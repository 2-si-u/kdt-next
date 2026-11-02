// const myTimeout = setTimeout(() => {}, 1000): 1000 -> 1초 뒤에 실행
// clearTimeout(myTimeout): myTimeout 종료
// const myInterval = setInterval(() => {}, 1000): 1000 -> 1초 마다 실행
// clearInterval(myInverval): Interval 종료


"use client"

import { useState } from "react";

export default function page() {

    const [message, setMessage] = useState<string>("타이머 실행 결과!😎")
    
    const timer = setTimeout(() => {
        setMessage("3초 결과 후 메세지 변경!😋")
    }, 3000)

    return (
        <>
            <p>{message}</p>
        </>
    );
}