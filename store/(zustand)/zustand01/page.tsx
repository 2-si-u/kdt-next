"use client"

import useCountStore from "@/store/useCountStore";
// 전역 상태를 이용한 카운트

export default function page() {

    const {count, increase, decrease} = useCountStore()
    
    return (
        <>
            <h1>{count}</h1>
            <button className="w-50 h-10 bg-green-500 text-white" onClick={decrease}>-1 감소</button>
            <button className="w-50 h-10 bg-green-500 text-white" onClick={increase}>+1 증가</button>
        </>
    );
}