// ref === DOM

import { useState } from "react";

//사용자가 이름을 입력하고 엔터를 누르면 
// 이름뒤에 "님"자를 붙여서 P 태그에 반영한다



export default function Name() {
    const [Name, setName] = useState("")
    const nameRef = useRef<HTMLParagraphElement>(null)
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => set.Name(e.target.value)
    const addNim = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            setName(name + "님")
        }
    }

    const handlePClick = (e:React.MouseEvent<HTMLInputElement>) => {
        console.log(nameRef.current)
    }


    return (
        <>
            <input
                className="border border-black"
                type="text" placeholder="이름을 입력하세요." 
                onChange={handleNameChange}
                onKeyDown={addNim}
            />
            <p ref={nameRef}{name}></p>
        </>
    );
}