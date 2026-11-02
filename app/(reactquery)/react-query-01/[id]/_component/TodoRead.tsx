<<<<<<< HEAD
"use client"

import { useQuery } from "@tanstack/react-query";
import type { Todo } from "../../_component/TodoQueryContainer";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";
=======
import ErrorComponent from "@/components/common/ErrorComponent";
import { useQuery } from "@tanstack/react-query";
import { constants } from "buffer";
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6

interface TodoReadProps {
    id: string;
}

<<<<<<< HEAD
const getTodoById = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) {
=======

const getTodoById = async (id: string) => {
    const response = await fetch(`"https://jsonplaceholder.typicode.com/todos ${if}"`)
    if (!response.ok) {
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
        throw new Error("Fetching Failed")
    }
    return await response.json()
}

<<<<<<< HEAD
export default function TodoRead({id}: TodoReadProps) {
=======
export default function TodoRead() {
    console.log("read.id", id)
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
    const {data, isLoading, refetch, error} = useQuery({
        queryFn: () => getTodoById(id),
        queryKey: ["todo", id],
    })

<<<<<<< HEAD
    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />
=======
    const {title, completed, userId}: Todo = data

    if(isLoading) return <Loading/>
    if(error) return <ErrorComponent/>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6

    return (
        <>
            <h1>[{id}번 게시글]{data?.title}</h1>
<<<<<<< HEAD
            <p>{data?.completed ? "할일 완료" : "미완료"}</p>
=======
            <p>{data?.completed? "할일완료":"미완료"}</p>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
            <p>유저: {data?.userId}</p>
        </>
    );
}