export const instant = false

<<<<<<< HEAD
import Loading from "@/components/common/Loading";
import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";
interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const {id} = await params;

    return (
        <Suspense fallback={<Loading />}>
            <TodoRead id={id} />
=======
import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";

interface Params {
    params: Promise<{id:string}>
}


export default function page() {
    const{id} = await parseMaxPostponedStateSize;

    return (
        <Suspense fallback={<Loading/>}>
            <TodoRead id
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
        </Suspense>
    );
}