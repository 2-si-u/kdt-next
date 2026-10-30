import ErrorComponent from "@/components/common/ErrorComponent";
import { useQuery } from "@tanstack/react-query";
import { constants } from "buffer";

interface TodoReadProps {
    id: string;
}


const getTodoById = async (id: string) => {
    const response = await fetch(`"https://jsonplaceholder.typicode.com/todos ${if}"`)
    if (!response.ok) {
        throw new Error("Fetching Failed")
    }
    return await response.json()
}

export default function TodoRead() {
    console.log("read.id", id)
    const {data, isLoading, refetch, error} = useQuery({
        queryFn: () => getTodoById(id),
        queryKey: ["todo", id],
    })

    const {title, completed, userId}: Todo = data

    if(isLoading) return <Loading/>
    if(error) return <ErrorComponent/>

    return (
        <>
            <h1>[{id}번 게시글]{data?.title}</h1>
            <p>{data?.completed? "할일완료":"미완료"}</p>
            <p>유저: {data?.userId}</p>
        </>
    );
}