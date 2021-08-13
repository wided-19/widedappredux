import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';


function App() {

  return (

    <div className="App">
      <header className="App-header">
      <h1 style ={{color:'beige'}}> My APP TODO </h1>
      <AddTask/>
      <ListTask/>
       
      </header>
    </div>
  );
}

export default App;