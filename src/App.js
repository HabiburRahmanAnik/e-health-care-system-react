import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import DoctorProfile from "./components/DoctorProfile";
import ImmediateTreatment from "./components/ImmediateTreatment";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientDetails from "./components/PatientDetails";
import ApproveAppointment from "./components/ApproveAppointment";
import NewApiroment from "./components/NewApiroment";
import ApointmentHistory from "./components/ApointmentHistory";
import OperationTheatres from "./components/OperationTheatres";
import IcuRoom from "./components/IcuRoom";
import EmergencyRoom from "./components/EmergencyRoom";
import HospitalAuthority from "./components/HospitalAuthority";
import DoctorInformation from "./components/DoctorInformation";
import FeedbackReview from "./components/FeedbackReview";
import DoctorChangePass from "./components/DoctorChangePass";
import DoctorUpdateInformation from "./components/DoctorUpdateInformation";
import CheckReport from "./components/CheckReport";
import UpdatePatientDate from "./components/UpdatePatientDate";

import SearchCourse from "./components/SearchCourse";

import Login from "./components/Login";



function App() {
  return (
    <Router>

    <div>
      <Switch>
        <Route exact path="/DoctorProfile" component={DoctorProfile}/>
        <Route exact path="/ImmediateTreatment" component={ImmediateTreatment}/>
        <Route exact path="/DoctorDashboard" component={DoctorDashboard}/>
        <Route exact path="/PatientDetails" component={PatientDetails}/>
        <Route exact path="/ApproveAppointment" component={ApproveAppointment}/>
        <Route exact path="/NewApiroment" component={NewApiroment}/>
        <Route exact path="/ApointmentHistory" component={ApointmentHistory}/>
        <Route exact path="/OperationTheatres" component={OperationTheatres}/>
        <Route exact path="/IcuRoom" component={IcuRoom}/>
        <Route exact path="/EmergencyRoom" component={EmergencyRoom}/>
        <Route exact path="/HospitalAuthority" component={HospitalAuthority}/>
        <Route exact path="/DoctorInformation" component={DoctorInformation}/>
        <Route exact path="/FeedbackReview" component={FeedbackReview}/>
        <Route exact path="/DoctorChangePass" component={DoctorChangePass}/>
        <Route exact path="/DoctorUpdateInformation" component={DoctorUpdateInformation}/>
        <Route exact path="/CheckReport" component={CheckReport}/>
        <Route exact path="/UpdatePatientDate/:id" component={UpdatePatientDate}/>

        <Route exact path="/SearchCourse" component={SearchCourse}/>

        <Route exact path="/" component={Login}/>
        
         
     </Switch>

    </div>

    </Router>
  );
}

export default App;
