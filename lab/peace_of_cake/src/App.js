import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import CakeImages from './components/CakeImages';
import Navigation from './components/NavBar';
import  Cakes  from './components/Recipes';



function App() {
  return (
    <div>
    
      
      <Title />
      <Navigation />
      <CakeImages />
      <h2>Here are this weeks featured recipes!</h2>
      <Cakes />
      
      

    
    </div>
  );
}

export default App;
