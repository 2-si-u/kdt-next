<<<<<<< HEAD
//※권장하지 않음
interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {

    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, )
    const post = await response.json()

    return (
        <>
            <p>{post.id}</p>
            <p>{post.title}</p>
=======

//권장하지 않음 
interface Params {
    Params: Promis<{id:string}>
}


export default function page({Params}: Params) {

    const {id} = await Params;
    const response = await fetch(`"https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
    
    return (
        <>
            <p>{<post.id}</p>
            <p>{post.title</p>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
        </>
    );
}