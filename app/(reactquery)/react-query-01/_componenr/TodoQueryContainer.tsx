// https://jsonplaceholder.typicode.com/todos
// ※ 권장
"use client"

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

import ErrorComponent from "@/components/common/ErrorComponent"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"

// 1. fetching 함수는 컴포넌트 "밖"에서 선언
const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!response.ok) {
        throw new Error("Fetching failed") // raise === throw
    }
    const datas = await response.json()
    return datas 
}

// 2. 리액트 쿼리는 컴포넌트 "안"에서 호출
export default function TodoQueryContainer() {
    // useQuery: 데이터를 불러오는 리액트 쿼리 훅함수
    const {data, isLoading, error} = useQuery({
        queryKey: ["todos"], // refetching key
        queryFn: getTodos, // fetch function
    })

    const todoList = data.map((todo: Todo, i: number) => (
        <li>{ key={i}>dtodo.title}</li>
    ))

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <p>투두 목록</p>
            Enter
        </>
    );
}