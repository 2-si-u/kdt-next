// https://jsonplaceholder.typicode.com/users
// 유저 데이터 전체를 fetching하여 유저의 이름만 화면에 목록으로 출력
"use client"
import { useQuery } from "@tanstack/react-query";

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error("getUsers fetching failed")
    }
    const users = await response.json()
    return users
}

export default function UserContainer() {

    const {data: users, isLoading, refetch, error} = useQuery<User[]>({
        queryFn: getUsers,
        queryKey: ["users"]
    })

    const userNameList = users?.map(({name}) => (
        <li>{name}</li>
    ))

    return (
        <>
            <ul>{userNameList}</ul>
        </>
    );
}