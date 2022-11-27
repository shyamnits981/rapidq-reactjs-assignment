import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const UpdateDetails = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [rollnumber, setRollNumber] = useState('');
    const [collagename, setCollageName] = useState('');
    const [branch, setBranch] = useState('');
    const [duedate, setDueDate] = useState('');
    const [propitylevel, setProrityLevel] = useState('');
    const [starred, setStarred] = useState('');
    const [creationdate, setCreationDate] = useState('');
    const [finishdate, setFinishDate] = useState('')


    const updateDetails = async () => {
        console.log(name, rollnumber, collagename, branch, duedate, propitylevel, starred, creationdate, finishdate)

    }
    return (
        <div className='mycard'>
            <h1 className='addtions'>Update Details</h1>
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

                <button onClick={updateDetails} className="buttons" >Add Product</button>
            </div>

        </div>
    )
}

export default UpdateDetails;