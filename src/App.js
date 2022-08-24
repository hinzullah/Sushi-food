import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import food1 from './Assets/food1.png'
import food2 from './Assets/food2.png'
import food3 from './Assets/food3.png'
import food4 from './Assets/food4.png'
import food5 from './Assets/food5.png'
import food6 from './Assets/food6.png'
import food7 from './Assets/food7.png'
import food8 from './Assets/food8.png'
function App() {

  const data= [
    {food: food1, name:'Smashed Avo'},
    {food: food2, name:'Yin & Yang'},
    {food: food3, name:'Pancakes'},
    {food: food4, name:'Huevos Rancheros'},
    {food: food5, name:'Rancheros (Rofu)'},
    {food: food6, name:'Breakie Roll'},
    {food: food7, name:'Breakie Roll'},
    {food: food8, name:'Burrita'}
  ]

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/menu' element={<Menu data={data} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
