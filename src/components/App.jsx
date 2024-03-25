import React, {useState} from "react";

function App() {

   const [contact, setcontact] = useState({
       fname: "",
       lname: "",
       email:""
   });

   function handleOnchange(event){
            const {name, value} = event.target;

            setcontact(prevvalue => {
                  return(
                    { 
                      ...prevvalue,
                      [name] : value
                    }
                  );
                  // if(name==="fname"){
                  //      return(
                  //       {
                  //         fname:value,
                  //       name:prevvalue.lastname,
                  //         email:prevvalue.email
                  //       }
                  //      )
                  // }
                  // else if(name==="lname"){
                  //      return(
                  //       {
                  //         fname:prevvalue.firstname,
                  //         lname:value,
                  //         email:prevvalue.email  
                  //       }
                  //      )
                  // }
                  // else{
                  //       return(
                  //         {
                  //           fname:prevvalue.firstname,
                  //           lname:prevvalue.lastname,
                  //           email:value
                  //         }
                  //       )
                  // }
            })
   }

  return (
    <div className="container">
      <form >
         <h1>hello {contact.fname} {contact.lname}</h1>
         <p>{contact.email}</p>
         <input name="fname" onChange={handleOnchange} type="text" placeholder="What's your name?" value={contact.fname}/>
         <input name="lname" onChange={handleOnchange} type="text" placeholder="What's your father name?" value={contact.lname}/>
         <input name="email" onChange={handleOnchange} type="email" placeholder="What's your email address" value={contact.email}/>
         <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
