import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';  
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
function App() {

  return (
    <BrowserRouter>
    <div >
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Dashboard} />
<Route path='/Project/:id'component={ProjectDetails} />
    <Route path='/signin'component={Signin}/>
    <Route path='/signup'component={Signup}/>
    <Route path='/create' component={CreateProject}/>
     </Switch>
    </div> 
    </BrowserRouter >
  );
}

export default App;
