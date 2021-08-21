
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminRouteLink from './components/pages/AdminRouteLink';
import AdminNavigation from './components/Layout/AdminNavigation';
import AuthContext from './components/context/auth-context';
import Login from './components/pages/Login';
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



function App() {
  const ctx = useContext(AuthContext);

  const content = localStorage.getItem('type');

  return (
    <>
      <AdminNavigation isLoggedIn={ctx.isLoggedIn} onLogout={ctx.onLogout} type={content}/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        {localStorage.getItem('isLoggedIn') && (
          <Route path="/login" exact>
            <Redirect to="/admin/dashboard" />
          </Route>
        )}
        <Route path="/login">
          <Login onLogin={ctx.onLogin} isLoggedIn={ctx.isLoggedIn} />
        </Route>
        {localStorage.getItem('isLoggedIn')  && content==='admin' && <AdminRouteLink/>}
        {!ctx.isLoggedIn && (
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        )}
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
      </Switch>
    </>
  )
}

export default App;
