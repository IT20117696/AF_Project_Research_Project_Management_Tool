import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
=======


>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
import Footer from '../Layout/footer';
import AdminNavBar from '../Layout/AdminNavBar';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

<<<<<<< HEAD
=======
import AdminNavBar from '../Layout/AdminNavBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
export default class Supervisorremove extends Component {
    constructor(props){
        super(props);
        this.state = {
            supervisorremove:[]
        };
    }  

<<<<<<< HEAD
    //retrive supervisor members 
=======
//retrive supervisor members 
>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
componentDidMount(){
    this.retrievesupervisorDetails();
} 

retrievesupervisorDetails(){
    axios.get("http://localhost:8070/usersremove/getsupervisor").then(res=>{
        if(res.data.status){
            this.setState({
                supervisorremove:res.data.supervisor
     });
    }
  })
 }

//delete supervisor
onDelete = (supervisorID) => {


    if (window.confirm('Are you sure you wish to delete this details?')) {
      axios.delete(`http://localhost:8070/usersremove/supervisordelete/${supervisorID}`).then((res) => {
<<<<<<< HEAD
       alert('Details Deleted Successfully');
  
=======

       alert('Details Deleted Successfully');

        toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
        //alert("Delete Successfully")
        this.retrievesupervisorDetails();
  
      })
    }
  }
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
  filterData(studentsremove, searchKey) {
    const result = studentsremove.filter((stud) =>
      stud.name.toLowerCase().includes(searchKey) ||
      stud.student_id.toLowerCase().includes(searchKey) 
      
    )
    this.setState({studentsremove: result })
  }
  
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/usersremove/getstudent").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingstudent,searchKey)
      }
    });
  }
   

 render() {
    return ( 
                        <div>
                          <AdminNavBar/>
                     <br/><br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
              <b><u>All Supervisor Details </u></b></h3><br/> 
           <div className="col-lg-2 mt-2 mb-2">
               <input className="form-control" type="search"
                  placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea} >
                </input></div>
             <div className='container'>  
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff Member Name</th>
                       <th scope='col'>Faculty</th>
                         <th scope='col'>Feild</th>
                           <th scope='col'>Staff ID</th>
<<<<<<< HEAD
                         <th scope='col'>Role</th>
=======
     <th scope='col'>Role</th>

                         <th scope='col'>Role</th>

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
                        <th scope='col'>Email</th>
                     <th scope='col'>Action</th>
                 </tr>
             </thead>
               <tbody>
                   {this.state.supervisorremove.map((supervisorremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{supervisorremove.name}</td>
                               <td>{supervisorremove.faculty}</td>
                                 <td>{supervisorremove.feild}</td>
                            <td>{supervisorremove.staff_id}</td>
                        <td>{supervisorremove.role}</td>
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
                   <td>{supervisorremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(supervisorremove._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>   
                     </td>              
                </tr>
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
                  )
                    )}
                      </tbody>     
                         </table>
                            </div>
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
                            <br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Footer/>
                              </div>
    )
  }
}
