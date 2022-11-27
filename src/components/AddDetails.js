import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddDetails = () => {
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
    const [error, setError] = useState(false);


    const addProduct = async () => {
        console.log(!name);
        if (!name || !rollnumber || !collagename || !branch || !duedate || !propitylevel || !starred || !creationdate || !finishdate) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("https://rapidq-shyam-nodejs.herokuapp.com/add-product", {
            method: 'post',
            body: JSON.stringify({ name, userId, rollnumber, collagename, branch, duedate, propitylevel, starred, creationdate, finishdate }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/detailslist')
    }

    const handleDetails = () => {
        navigate('/detailslist')
    }
    return (
        <div className='Container'>

            <div className='heading'>
                <h1>Add Student Details </h1>
                <button onClick={handleDetails} className='btnsss'>DetailsList</button>
            </div>

            <div className='input-field'>
                <h6>Name:</h6> <input type="text" placeholder='Enter Student Name' className='inputBox' value={name} onChange={(e) => { setName(e.target.value) }} />
                {error && !name && <span className='invlid-input'>Enter valid name</span>}
                <h6>Roll Number:</h6><input type="text" placeholder='Enter RollNumber' className='inputBox' value={rollnumber} onChange={(e) => { setRollNumber(e.target.value) }} />
                {error && !rollnumber && <span className='invlid-input'>Enter valid rollnumber</span>}
                <h6>Collage Name:</h6> <input type="text" placeholder='Enter Collage name' className='inputBox' value={collagename} onChange={(e) => { setCollageName(e.target.value) }} />
                {error && !collagename && <span className='invlid-input'>Enter valid collage name</span>}
                <h6>Branch name:</h6>  <input type="text" placeholder='Enter Branch' className='inputBox' value={branch} onChange={(e) => { setBranch(e.target.value) }} />
                {error && !branch && <span className='invlid-input'>Enter valid Branch</span>}
                <h6>Due Date:</h6>  <input type="text" placeholder='Enter Due date' className='inputBox' value={duedate} onChange={(e) => { setDueDate(e.target.value) }} />
                {error && !duedate && <span className='invlid-input'>Enter valid Due Date</span>}
                <h6>Prority Livel:</h6> <input type="text" placeholder='Protity Level' className='inputBox' value={propitylevel} onChange={(e) => { setProrityLevel(e.target.value) }} />
                {error && !propitylevel && <span className='invlid-input'>Enter valid Property Level</span>}
                <h6>Starred:</h6><input type="text" placeholder='Starred' className='inputBox' value={starred} onChange={(e) => { setStarred(e.target.value) }} />
                {error && !starred && <span className='invlid-input'>Enter valid Starred</span>}
                <h6>Creation Date:</h6><input type="text" placeholder='Creation date' className='inputBox' value={creationdate} onChange={(e) => { setCreationDate(e.target.value) }} />
                {error && !creationdate && <span className='invlid-input'>Enter valid Creation Date</span>}
                <h6>Finish Date:</h6>   <input type="text" placeholder='Enter Finish Date' className='inputBox' value={finishdate} onChange={(e) => { setFinishDate(e.target.value) }} />
                {error && !finishdate && <span className='invlid-input'>Enter valid Finish Date</span>}
                <button onClick={addProduct} className="buttons" >Add Details</button>


            </div>


        </div>
    )
}

export default AddDetails;