import { ImportIcon } from "lucide-react";
import Image from "next/image";
import catSrc from "@/public/assets/images/react-query-02/cat.jpg"



export default function page() {
    return (
        <>
{
    /*
        "/":resource 의 "/" 경로는 pubilc경로를 의미
        placeholder: 로딩 중 블러처리
        priority: 지연모드방지
    */
}

        <image
            src={"/assets/images/react-query-02/cat.jpg"}
            alt="애옹"
            width={600}
            height={300}
            priority
        />

        <image
            src={"/assets/images/react-query-02/cat.jpg"}
            alt="애옹"
            width={600}
            height={300}
            className="bg-gray-100"
        
        />
        <image
            src={"/assets/images/react-query-02/cat.jpg"}
            alt="애옹"
            placeholder="blur"
        
        />


        </>
    );
}
