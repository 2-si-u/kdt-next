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
}