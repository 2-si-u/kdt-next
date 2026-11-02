<<<<<<< HEAD
// import TodoQueryContainer from "./_component/TodoQueryContainer";
import TodoQueryContainer02 from "./_component/TodoQueryContainer02";

export default function page() {
    return (
        <>
            <h1>투두 목록</h1> {/* SSR */}
            <TodoQueryContainer02 /> {/* CSR */}
        </>
=======
export const instant = false

import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";

export default function page() {
    return (
        <Suspense fallback={<div>페이지 로딩중...</div>}>
            <TodoRead />
        </Suspense>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
    );
}