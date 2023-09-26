import "./sass/employee.scss";
import React, { useState, useEffect } from "react";
import { employeesList } from "./data/employeeList";
import  ListHeading  from "./components/ListHeading";
import ListItem from "./components/ListItem";
import Papa from "papaparse";

/**
 * 
 * @returns Main Component to render the UI
 */
export default function App() {

  const [fieldName, setFieldName] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
 
  
  /**
   * fetch all employee list when component mounts 
   */
  useEffect(() => {
    setEmployeeList([...employeesList]);
  }, []);

  const handleAsendClick = (field) => {
    setFieldName(field);
    if(field === "id"){
    employeeList.sort((a, b) => a[field]-b[field]);
    }else{
        employeeList.sort((a, b) => {
            var textA = a[field].toUpperCase();
            var textB = b[field].toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }); 
    }
    setEmployeeList([...employeeList]);
  }

  const handleDescendClick = (field) => {
    setFieldName(field);
    if(field === "id"){
    employeeList.sort((a, b) => b[field] -a[field]);
    }else{
        employeeList.sort((a, b) => {
            var textA = a[field].toUpperCase();
            var textB = b[field].toUpperCase();
            return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
        }); 
    }
    setEmployeeList([...employeeList]);
  }

  const handleResetClick = () => {
    setFieldName("");
    setEmployeeList([...employeesList]);
  }

  const handleSearch = (e) => {
    const inputValue = e.target.value||"";
    let newList = employeesList.filter(employee => employee.name.toUpperCase().includes(inputValue?.toUpperCase()));
    setEmployeeList([...newList]);
  }

  const handleInputChange = (e) => {
  Papa.parse(e?.target?.files[0], {
    download: true,
    header:true,
    complete: data => {
        setEmployeeList([...employeeList, ...data.data]);
    }
});
  }


  return (
    <div className="lists-wrapper">
        <h2>Employee List</h2>
        <div className = "button-wrapper">
        <input onChange = {handleSearch} name = "search-on-name" placeholder="Seach Name"/>
        <button onClick = {handleResetClick} >Reset</button>
        <button text ="upload" onClick = {()=>document.getElementById('myFile').click()}>Upload CSV</button>
        <input type = "file" id = "myFile" name = "myFile" accept = ".csv" onChange = {handleInputChange} hidden/>
        </div>
        <div className="list">
        <ListHeading handleAsendClick = {handleAsendClick} handleDescendClick = {handleDescendClick}/>
        {employeeList?.length>0 && employeeList.map(employee => {
           return <ListItem id = {employee.id}  name = {employee.name} emailId = {employee.emailId} phoneNo = {employee.phoneNo} designation = {employee.degisnation}/>
        }
        )}
        </div>
    </div>
  );
}
