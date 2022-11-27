import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
const Update = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [rollnumber, setRollNumber] = useState('');
    const [collagename, setCollageName] = useState('');
    const [branch, setBranch] = useState('');
    const [duedate, setDueDate] = useState('');
    const [propitylevel, setProrityLevel] = useState('');
    const [starred, setStarred] = useState('');
    const [creationdate, setCreationDate] = useState('');
    const [finishdate, setFinishDate] = useState('');
    const params = useParams();

    useEffect(()=>{
      console.log(params);
      getDetails();
    },[])

    const getDetails = async () =>{
      console.log(params);
      let result = await fetch(`https://rapidq-shyam-nodejs.herokuapp.com/product/${params.id}`)
      result = await result.json();
      setName(result.name);
      setRollNumber(result.rollnumber);
      setCollageName(result.collagename);
      setBranch(result.branch);
      setDueDate(result.duedate);
      setProrityLevel(result.propitylevel);
      setStarred(result.starred);
      setCreationDate(result.creationdate);
      setFinishDate(result.finishdate);
    }


    const updateDetails = async () => {
    console.log(name, rollnumber, collagename, branch, duedate, propitylevel, starred, creationdate, finishdate)
        let result = await fetch(`https://rapidq-shyam-nodejs.herokuapp.com/product/${params.id}`,{
          method:'PUT',
          body:JSON.stringify({name, rollnumber, collagename, branch, duedate, propitylevel, starred, creationdate, finishdate}),
          headers:{
            'Content-Type':"application/json"
          }
        });
        result = await result.json()
        console.log(result)
        navigate("/detailslist")
        
    }

    return (
        <div className='Container'>
          <h1>Update Details</h1>
          <div className='input-field'>
          <input type="text" placeholder='Enter Student Name' className='inputBox' value={name} onChange={(e) => { setName(e.target.value) }} />
          <input type="text" placeholder='Enter RollNumber' className='inputBox' value={rollnumber} onChange={(e) => { setRollNumber(e.target.value) }} />
          <input type="text" placeholder='Enter Collage name' className='inputBox' value={collagename} onChange={(e) => { setCollageName(e.target.value) }} />
          <input type="text" placeholder='Enter Branch' className='inputBox' value={branch} onChange={(e) => { setBranch(e.target.value) }} />
          <input type="text" placeholder='Enter Due date' className='inputBox' value={duedate} onChange={(e) => { setDueDate(e.target.value) }} />
          <input type="text" placeholder='Protity Level' className='inputBox' value={propitylevel} onChange={(e) => { setProrityLevel(e.target.value) }} />
          <input type="text" placeholder='Starred' className='inputBox' value={starred} onChange={(e) => { setStarred(e.target.value) }} />
          <input type="text" placeholder='Creation date' className='inputBox' value={creationdate} onChange={(e) => { setCreationDate(e.target.value) }} />
          <input type="text" placeholder='Enter Finish Date' className='inputBox' value={finishdate} onChange={(e) => { setFinishDate(e.target.value) }} />

            <button onClick={updateDetails} className="buttons" >Update Details</button>
          </div>

        </div>
    )
}
  

export default Update;