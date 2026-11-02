export default function FoodContainer() {

    const foods = [
        {
            name: "녹차아이스크림",
            price: 15000
        },
        {
            name: "소고기",
            price: 50000
        },
        {
            name: "샌드위치",
            price: 5000
        },
        {
            name: "미역국",
            price: 100000
        },
        {
            name: "마라탕",
            price: 20000
        },
    ]

    // ※DOM에 직접 접근하지 마라!※
    // foods.forEach((food) => {
    //     const li = document.createElement("li")
    //     li.innerText = food.name
    //     document.querySelector("ul")?.appendChild(li)
    // })

    // map
    // Food컴포넌트로 리스트 Props로 분리하기
    const foodList = foods.map((food, i) => (
        <li key={i}>{food.name}</li>
    ))

    return (
        <> 
            <ul>{foodList}</ul>
        </>
    );
}