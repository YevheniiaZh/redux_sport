import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
        <h1>What is your goal?</h1>
        {['Get Fit', 'Muscle build', 'Cardio', 'Lose weight', 'Show me all options'].map(category => <Filter category ={category}/>)}
        </div>
    )
}

export default AllCategories;