<<<<<<< HEAD
import Child from "./Child";

export default function Parent() {
    
    const name: string = "홍길동"
    const phone: string = "010-1234-1234"

    return (
        <>
            부모 태그!😎
            <Child name={name} phone={phone} />
        </>
    );
=======
import Parent from 

export default function page() {

    const name: string = "홍길동"
    const phone: string = "010-1234-1234"


    return (
        <>
            부모태그
            <Child name={name} phone={phone} />
        </>
    )
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
}