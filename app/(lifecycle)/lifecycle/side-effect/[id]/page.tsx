
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
        </>
    );
}