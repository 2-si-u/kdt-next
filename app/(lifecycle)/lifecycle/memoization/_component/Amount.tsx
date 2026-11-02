interface AmountProps {
    amount: number;
    coupon: number;
    handleSubtractAmountClick: () => void,
    handleAddAmountClick: () => void,
    handleSubtractCouponClick: () => void,
    handleAddCouponClick: () => void,
}

export default function Amount({
    amount,
    coupon,
    handleSubtractAmountClick,
    handleAddAmountClick,
    handleSubtractCouponClick,
    handleAddCouponClick
<<<<<<< HEAD
}: AmountProps) {
    console.log("자식 랜더링!👶")
=======
}: AmountProps) { 
    console.log("자식 랜더링")
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6

    return (
        <div className="border border-blue-300 h-15 flex justify-center items-center p-5 gap-4">
            {amount > 1 && (
                <button className="w-10 h-10 bg-purple-300" onClick={handleSubtractAmountClick}>-</button>
            )}
            <p>수량: {amount}</p>
            <button className="w-10 h-10 bg-purple-300" onClick={handleAddAmountClick}>-</button>

            {coupon > 0 && (
                <button className="w-10 h-10 bg-purple-300" onClick={handleSubtractCouponClick}>-</button>
            )}
<<<<<<< HEAD
            <p>쿠폰: {amount}</p>
=======
            <p>수량: {amount}</p>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
            <button className="w-10 h-10 bg-purple-300" onClick={handleAddCouponClick}>-</button>
        </div>
    );
}