import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';  
function App() {

  return (
    <BrowserRouter>
    <div >
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Dashboard} />
<Route path='/Project/:id'component={ProjectDetails} />
     </Switch>
    </div> 
    </BrowserRouter >
  );
}

export default App;
