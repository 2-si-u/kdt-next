import Image from "next/image";

export default function Home() {
  return (
    // React.Fragment: DOM 트리를 하나로 만들기 위한 태그
    <P>Hello, World!</P>
    <P>Hello, World!</P>
  );
}



export default function page() {
  const user = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남"
  
}

return(
  <>
    <p>이름: {user.name}</p>
    <P>나이: {user.age}</P>
    <p>주소: {user.address}</p>
  </>
)


const getName = (name: any) => name || "홍길동"
const login = true

//만약 사용자가 로그인이라면 회원의 이름을 화면에 태그로 출력하고
// 만약 로그인이 아니라면 비회원입니다를 태그로 출력


//Fragment는 DOM을 하마로 붂기위한 태그로 화면에 랜더링 되지 않는다 
return(
  <>
      {login ? (
        <>
          <P>{getName("장보고")}님 환영합니다.</P>
        </>
      
      )}
  </>
)




// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력








