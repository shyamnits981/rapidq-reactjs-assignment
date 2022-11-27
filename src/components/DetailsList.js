import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const DetailsList = () => {
    const navigate = useNavigate('')
    const [product, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products")
        result = await result.json();
        setProducts(result);
    }


    const handleAddbutton = () => {
        navigate('/adddetils')
    }


    console.log("product", product);


    const deleteProducts = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            getProducts();
        }
    };

    const searchHandle = async(event)=>{

       let key = event.target.value;

       if(key){
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        if(result){
         setProducts(result);
        }
       }else{
        getProducts();
       }
    
    }

    return (
        <div className='product-list'>
            search By RollNumber
            <input type="text" placeholder='Serach By RollNumber' className='searchinput' onChange={searchHandle} />
            <button onClick={handleAddbutton} className="buttons">addDetails</button>
            <ul>
                <b><li className='list1'>S.No</li></b>
                <b><li className='list1'>NAME</li></b>
                <b><li className='list1'>ROLL NUMBER</li></b>
                <b><li className='list1'>COLLAGE NAME</li></b>
                <b><li className='list1'>BRANCH</li></b>
                <b><li className='list1'>DUE DATE</li></b>
                <b><li className='list1'>PRORITY LEVEL</li></b>
                <b><li className='list1'>STARRED</li></b>
                <b><li className='list1'>CREATION DATE</li></b>
                <b><li className='list1'>FINISH DATE</li></b>
                <b><li className='list1'>OPERATION</li></b>
            </ul>
            {
               product.length>0 ? product.map((item, index) =>
                    <ul key={item._id}>
                        <li className='list1'>{index + 1}</li>
                        <li className='list1'>{item.name}</li>
                        <li className='list1'>{item.rollnumber}</li>
                        <li className='list1'>{item.collagename}</li>
                        <li className='list1'>{item.branch}</li>
                        <li className='list1'>{item.duedate}</li>
                        <li className='list1'>{item.propitylevel}</li>
                        <li className='list1'>{item.starred}</li>
                        <li className='list1'>{item.creationdate}</li>
                        <li className='list1'>{item.finishdate}</li>
                        {/* <li><button onClick={() => deleteProducts(item._id)} className='list11' >Delete</button> */}
                           <li> <Link to={"/update/" + item._id} className='list11'>Update</Link></li>
                    </ul>
                    ):<h1>No result found</h1>
            }
        </div>
    )
}

export default DetailsList;