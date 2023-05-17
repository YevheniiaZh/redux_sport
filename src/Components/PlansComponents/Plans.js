import dataPlans from "../../data/dataPlans";
import Plan from "./Plan";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/plansSlice";


const Plans = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
        {dataPlans
        .filter(plan =>{
            if (selectedCategory === "Show me all options") return true;
            return selectedCategory === plan.category;
        })
        .map(plan => <Plan plan ={plan}/>)}
        </div>
    )
}

export default Plans;