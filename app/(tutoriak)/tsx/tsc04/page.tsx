//컴포넌트 분리
//1. 컴포넌트는 반드시 닫는 태그가 존재햐애한다
//2. 앞글자가 대문자로 시작한다
//3. Atomic Design Pattern 은 _Component, _function
//tsx04 에서 사용되는 공용함수 밎 컴포넌트를 분리한다

export default function page() {
    return (
        <>
            <P>홍길동</P>
            <ShComponent/>
        </>
    )
}