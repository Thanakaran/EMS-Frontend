import React,{useEffect, useState} from 'react'
import { listemployees } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

function ListEmployeeComponent() {
    const [employees, setemployees]= useState([])

    const navigator = useNavigate();

    useEffect ( () =>{
        listemployees().then((response) =>{
            setemployees(response.data)
        } 
        )
        .catch(error => {
             console.error(error)
        }
        )
    },[])

    function addNewEmployee() {
            navigator('/add-Employee')
    }
    
  return (

    <div className='container'>
        <h2 className='text-center'>ListEmployeeComponent</h2>
        <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>EmployeeId</th>
                    <th>Employee First Name</th>
                    <th>EmployeeLast Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>

                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent