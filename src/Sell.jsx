import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
function Sell() {
    const [info,updateInfo]=useState({});
    const [file,setFile]=useState(null);
    const [name,setName]=useState("");
    const hist=useHistory();
    function handleChange(event){
        const value=event.target.value;
        const name=event.target.name;
    updateInfo({...info,[name]:value});
    }
    function handleFileChange(e){
        setName(e.target.files[0].name);
        setFile(e.target.files[0]);
    }
    const postData= async (event)=>{
        event.preventDefault();
        const {Name,Type,desc,age,breed,gender}=info;
        const formData= new FormData();
        formData.append('testImg',file);
        formData.append('Name',Name);
        formData.append('Type',Type);
        formData.append('breed',breed);
        formData.append('age',age);
        formData.append('desc',desc);
        formData.append('gender',gender)
        const config={
            headers:{
                "Content-Type":"multipart/form-data"
            }
        };
        Axios.post("http://localhost:3000/sell",formData,config)
        .then(function(res){console.log(res.data); window.alert("Information updated!");})
        .catch(function(err){console.log(err); window.alert("Error Occured");});

        hist.push("/");
        
    }
return(
<div>
<div className="sellh"><h1 >Sell your pets easily</h1><p>First provide us the information of your pet so that we can showcase it to our users</p>
</div>
    <div className="sellForm">
        <form method="POST" enctype="multipart/form-data" onSubmit={postData}>
            <div className="attr">
                <label for="Name">Name</label>
                <input className="inputs" type="text" id="Name" placeholder="Name" 
                       value={info.Name} onChange={handleChange} name="Name" required/>
            </div>
            <div className="attr">
                <label for="Type">Type</label>
                <select className="inputs" name="Type" value={info.Type} onChange={handleChange}> 
                  <option name="none"> None</option>
                  <option name="dog"> Dog</option>
                  <option name="cat">Cat</option>
                  <option name="bird">Bird</option>
                  <option name="rabbit">Rabbit</option>
                </select>
            </div>
            <div className="attr">
                <label for="gender">Gender</label>
                <input className="inputs" type="text" id="gender" placeholder="Gender" 
                       value={info.gender} onChange={handleChange} name="gender" required/>
            </div>
            <div className="attr">
                <label for="breed">Breed</label>
                <input className="inputs" type="text" id="breed" placeholder="Breed" 
                       value={info.breed} onChange={handleChange} name="breed" required/>
            </div>
            <div className="attr">
                <label for="age">Age</label>
                <input className="inputs" type="text" id="age" placeholder="Age" 
                       value={info.age} onChange={handleChange} name="age" required/>
            </div>
            <div className="attr">
                <label for="desc">Description</label>
                <input className="inputs" type="text" id="desc" name="desc" value={info.desc} onChange={handleChange} 
                          placeholder="Description" maxlength="50" required/>
            </div>
            <div className="attr">
                <label for="testImg">Upload Pet Image</label>
                <i class="fa-solid fa-upload fa-lg move"></i>
                <input className="rmv inputs" type="file" name="testImg" id ="testImg" onChange={handleFileChange}  required/>
            </div>
            <div>
            {(name.length!==0) && <div className="fileName">
                {name}
                </div>}

            </div>
            <div className="attr">
                <button type="submit" className="inputs g" >Submit</button>
            </div>
        </form>
    </div>
    </div>)};

    export default Sell;