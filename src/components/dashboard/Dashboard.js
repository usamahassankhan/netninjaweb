import React,{Component} from 'react';
import Notifications from './Notification';
import Projectlist from '../projects/Projectlist';
 class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
        <div className="row">   
            <div className= "col s12 m6 ">
                <Projectlist/>
            </div>
            <div className="col s12 m5 offset-m1"></div>
<Notifications/> 
            </div>                
            </div>
        )
    }
}
export default Dashboard;