import dataPlans from "../../data/dataPlans";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


const CartItem = ({cartItem}) => {

    const plans = dataPlans.find(item => item.id ===cartItem.planId)
    const dispatch = useDispatch();
    return (
        <div>
            <p>{plans.name}</p>
            <p> $ {plans.price}</p>
            <span onClick={() =>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img  className="icon" src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" alt="filled-trash"/>
            </span>
        </div>
    )
}

export default CartItem;