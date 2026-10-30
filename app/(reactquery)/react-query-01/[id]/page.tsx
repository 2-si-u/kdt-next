export const instant = false

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
        </Suspense>
    );
}