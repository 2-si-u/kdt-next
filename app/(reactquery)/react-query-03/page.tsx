<<<<<<< HEAD
export const instant = false

import { Suspense } from "react";
import UserContainer from "./_component/UserContainer";
import Loading from "@/components/common/Loading";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <UserContainer />
=======
import { Suspense } from "react";
import UserRead from "./_component/UserRead";
import Loading from "@/components/common/Loading";

// read도 분리된 함수를 사용하여 코드 제작하기
export const instant = false

interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const { id } = await params;

    return (
        <Suspense fallback={<Loading />}>
            <UserRead id={id} />
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
        </Suspense>
    );
}