
import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Plans from './Components/PlansComponents/Plans';

function App() {
  return (
    <div className="App">
      <div className='planBlock'>
      <Plans/>
      </div>
      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>
    </div>
  );
}

export default App;
