import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const Plan = ({plan}) =>{

    const dispatch = useDispatch()

    return(
        <div className="planBlock">
            <h2>{plan.name}</h2>
            <img src={`./${plan.img}.jpg`}/>
            <p>$ {plan.price}</p>
            <p>{plan.category}</p>
            <p>Trainer: {plan.trainer}</p>
            <p>Level: {plan.level}</p>
            <button className="addToCart" onClick={() => {dispatch(addItemToCart({plan}))}}>Add to cart</button>
        </div>
    )
}

export default Plan;