import React from 'react';
import './App.css';

import Profile from './components/AA_Components/student-profile';
import MainHome from './components/AA_Components/mainhome';
import Faculties from './components/AA_Components/faculties';

import {BrowserRouter,Route,Switch,Routes} from 'react-router-dom';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import StaffLogin from './components/SS_Components/staff-login';
import StaffSignup from './components/SS_Components/staff-registration';
import Staff_Dashboard from './components/SS_Components/Staff_Dashboard';
import ResearchTopic from './components/SS_Components/ResearchTopic';
import Signup from './components/AA_Components/student-registration';
import StudentLogin from './components/AA_Components/student-login';
import BackendHomePage from './components/Layout/BackendHomePage'
import StaffProfile from './components/SS_Components/StaffProfile';
import Adminregistration from './components/RD_Components/adminregistration';
import AdminLogin from './components/RD_Components/adminlogin';
import Admindashboard from './components/RD_Components/admindashboard';
import AdminProfile from './components/RD_Components/adminProfile';
import AdminViewStaff from './components/SS_Components/AdminViewStaff';
import Createmarkingschemes from './components/RD_Components/createmarkingschemes';
import Homemarkingschemes from './components/RD_Components/homemarkingschemes';
import Editmarkingschemes from './components/RD_Components/editmarkingschemes';
import Markingschemesdetails from './components/RD_Components/markingschemesdetails';
import Usersremove from './components/RD_Components/usersremove';
import Supervisorremove from './components/RD_Components/supervisorremove';
import CoSupervisorremove from './components/RD_Components/cosupervisorremove';
import Studentsremove from './components/RD_Components/studentsremove';
import PanelMembers from './components/SS_Components/PanelMembers';
import UploadGroupAssignment from './components/SS_Components/UploadGroupAssignment';
import StudentDashboard from './components/SS_Components/StudentDashboard';
import StudentHomePage from './components/SS_Components/StudentHomePage';

function App() {
  return (
   <BrowserRouter>
   <Switch>
    {/* <Route path = "/" element={<StudentLogin/>}/>
    <Route path = "/signup" element={<Signup/>}/> 
    <Route path = "/addpanelmember" element={<Add_panel_member/>}/>
    <Route path = "/edit_panelmembers" element= {Edit_panem_member}/>
    <Route path = "/" element= {<DisplayStudentgroups/>}/> */}
    {/* <Route path = "/add" element={<Adminregistration/>}/> 
    <Route path = "/login" element={<AdminLogin/>}/>  
    <Route path = "/adminpage" element={<Adminpage/>}/>   */}
    {/* <Route path = "/homemarkingschemes" element={<Homemarkingschemes/>}/> 
    <Route path = "/createmarkingadd" element={<Createmarkingschemes/>}/>
    <Route path = "/createmarkingedit/:createmarkingID" element={<Editmarkingschemes/>}/>
    <Route path = "/createmarking/:createmarkingID" element={<Markingschemesdetails/>}/>
    */}
     

     <Route path = "/" component={StudentHomePage} exact/>
   
     <div>  
     <Route path = "/staff" component={BackendHomePage}/>
     <Route path = "/stafflogin" component={StaffLogin}/>
     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
     <Route path = "/staffprofile" component={StaffProfile}/>
     <Route path = "/displayStaffRole" component={AdminViewStaff}/>
     <Route path = "/panelmember" component={PanelMembers}/>
     <Route path = "/assignmentgroups/save" component={UploadGroupAssignment}/>
     <Route path = "/studentdashboard" component={StudentDashboard}/>

     
     <Route path = "/signin" component={StudentLogin}/>
     <Route path = "/signup" component={Signup}/>
     <Route path = "/profile" component={Profile}/>
     <Route path = "/mainhome" component={MainHome}/>
     <Route path = "/faculties" component={Faculties}/>

     <Route path = "/adminsignup" component={Adminregistration}/> 
     <Route path = "/adminsignin" component={AdminLogin}/>  
     <Route path = "/admindashboard" component={Admindashboard}/>  
     <Route path = "/adminprofile" component={AdminProfile}/>  

     <Route path = "/homemarkingschemes" component={Homemarkingschemes}/> 
    <Route path = "/createmarkingadd" component={Createmarkingschemes}/>
    <Route path = "/createmarkingedit/:createmarkingID" component={Editmarkingschemes}/>
    <Route path = "/createmarking/:createmarkingID" component={Markingschemesdetails}/>
    <Route path = "/getpanelmember" component={Usersremove}/>
    <Route path = "/getsupervisor" component={Supervisorremove}/>
    <Route path = "/getcosupervisor" component={CoSupervisorremove}/>
    <Route path = "/getstudent" component={Studentsremove}/>
    

   </div>  
   </Switch>
   </BrowserRouter>
  );
}

export default App;
