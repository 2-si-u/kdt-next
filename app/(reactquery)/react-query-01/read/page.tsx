<<<<<<< HEAD
export const instant = false

import { Suspense } from "react";
=======
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
import TodoRead from "./_component/TodoRead";

export default function page() {
    return (
<<<<<<< HEAD
        <Suspense fallback={<div>페이지 로딩중...</div>}>
            <TodoRead />
        </Suspense>
=======
        <>
            <TodoRead/>
        </>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
    );
}