import React, {useState} from 'react'
import "../styles/HireMe.css"
const HireMe = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone: "",
    address:"",
    message:""
    });
    let name, value;
    const getUserData = (event) =>{
    name = event.target.name;
    value = event.target.value; 
    setUser({ ...user, [name]: value });
    };
  
    const postData = async(e)=>{
     e.preventDefault();
     const { name, email, phone, address, message }=user;
     const res = await fetch("https://homeservice-7cbc4-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name,
        email,
        phone,
        address,
        message,
        }),
        } 
     );
    if(res){
      setUser({
        name:"",
        email:"",
        phone: "",
        address:"",
        message:""
        });
        alert('Thank you for contacting us!');
    }
    };

  return (
    <>
    <div className="container-contact100">
      <div className="wrap-contact100">
        <form className="contact100-form " method='POST'>
          <span className="contact100-form-title">Contact Us</span>
          <div className="wrap-input100 rs1-wrap-input100">
            <span className="label-input100">Your Name</span>
                <input className="input100" type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off" 
                required/>
                <span className="focus-input100"></span>
               </div>
               <div className="wrap-input100 rs1-wrap-input100">
              <span className="label-input100">Your Email</span>
                <input className="input100" 
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={user.email}
                onChange={getUserData}
                autoComplete="off" 
                required/>
                <span className="focus-input100"></span>
               </div>
               <div className="wrap-input100 rs1-wrap-input100 "> 
               <span className="label-input100">Mobile Number</span>
                <input
                className="input100"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={user.phone}
                onChange={getUserData}
                
                autoComplete="off"
                required/>
                <span className = "focus-input100"></span>
               </div>
            <div className="wrap-input100 rs1-wrap-input100 ">
             <span className="label-input100">Address</span>
              <input
              className="input100"
              type="text"
              name="address"
              placeholder="Enter your address"
              value={user.address}
                onChange={getUserData}
                
              autoComplete="off"
              required/>
              </div>
              <span className = "focus-input100"></span>
              <div className="wrap-input100 ">
              <span className="label-input100">Message</span>
                <textarea
                className="input100"
                name="message"
                placeholder="Your message here... "
                value={user.message}
                onChange={getUserData}
                >
                </textarea>
              <span className="focus-input100"></span> 
              </div>
              <div className="container-contact100-form-btn"> 
            <button className="contact100-form-btn" onClick={postData}>
            <span>
            Submit
            </span>
            </button>
            </div>
         </form>
       </div>     
      </div> 
    </>
    
  )
}

export default HireMe