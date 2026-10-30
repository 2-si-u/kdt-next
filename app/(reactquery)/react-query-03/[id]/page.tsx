// read도 분리된 함수를 사용하여 코드 제작하기
export const instant = false

export default function page() {
    return (
        <>
            Enter
        </>
    );
}

"use client"

import { useEffect, useState } from "react";

// 데이터를 가져오는 함수 (Read)
async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return data;
}

export default function page() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const read = async () => {
            const data = await getUserData();
            setUsers(data);
        };

        read();
    }, []);

    return (
        <>
            <h1>유저 목록</h1>

            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </>
    );
}