import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import dashboard from "./components/dashboard";
import PatientDiscount from "./components/PatientDiscount";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientInfo from "./components/PatientInfo";
import ViewDoctorSche from "./components/ViewDoctorSche";
import UploadPhoto from "./components/UploadPhoto";
import ChangePass from "./components/ChangePass";
import Emergency from "./components/Emergency";
import Room from "./components/Room";
import Transactions from "./components/Transactions";
import editprofile from "./components/editprofile";
import PatientBill from "./components/PatientBill";
import DoctorInformation from "./components/DoctorInformation";
import review from "./components/review";
import Search from "./components/Search";
import login from "./components/login";
import chatbox from "./components/chatbox";
import condoctor from "./components/condoctor";
import conpatient from "./components/conpatient";
import SearchDoctor from "./components/SearchDoctor";
import SearchPatient from "./components/SearchPatient";


function App() {
  return (
    <Router>

    <div>
      <Switch>
        <Route exact path="/dashboard" component={dashboard}/>
        <Route exact path="/PatientDiscount" component={PatientDiscount}/>
        <Route exact path="/DoctorDashboard" component={DoctorDashboard}/>
        <Route exact path="/PatientInfo" component={PatientInfo}/>
        <Route exact path="/ViewDoctorSche" component={ViewDoctorSche}/>
        
        <Route exact path="/ChangePass" component={ChangePass}/>
        <Route exact path="/Search" component={Search}/>
        <Route exact path="/login" component={login}/>
        <Route exact path="/SearchDoctor" component={SearchDoctor}/>
        <Route exact path="/SearchPatient" component={SearchPatient}/>
        <Route exact path="/Emergency" component={Emergency}/>
        <Route exact path="/Room" component={Room}/>
        <Route exact path="/condoctor" component={condoctor}/>
        <Route exact path="/conpatient" component={conpatient}/>
        <Route exact path="/chatbox" component={chatbox}/>
        <Route exact path="/Transactions" component={Transactions}/>
        <Route exact path="/editprofile" component={editprofile}/>
        <Route exact path="/PatientBill" component={PatientBill}/>
        <Route exact path="/UploadPhoto" component={UploadPhoto}/>
        <Route exact path="/DoctorInformation" component={DoctorInformation}/>
        <Route exact path="/review" component={review}/>
         
     </Switch>

    </div>

    </Router>
  );
}

export default App;
