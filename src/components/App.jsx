import React, {useState} from "react";

function App() {

   const [contact, setcontact] = useState({
       firstname: "",
       lastname: "",
       email:""
   });

   function handleOnchange(event){
            const {value, name} = event.target;

            setcontact(prevvalue=>{
                  if(name==="fname"){
                       return(
                        {
                          firstname:value,
                          lastname:prevvalue.lastname,
                          email:prevvalue.email
                        }
                       )
                  }
                  else if(name==="lname"){
                       return(
                        {
                          firstname:prevvalue.firstname,
                          lastname:value,
                          email:prevvalue.email  
                        }
                       )
                  }
                  else{
                        return(
                          {
                            firstname:prevvalue.firstname,
                            lastname:prevvalue.lastname,
                            email:value
                          }
                        )
                  }
            })
   }

  return (
    <div className="container">
      <form >
         <h1>hello {contact.firstname} {contact.lastname}</h1>
         <p>{contact.email}</p>
         <input name="fname" onChange={handleOnchange} type="text" placeholder="What's your name?" value={contact.firstname}/>
         <input name="lname" onChange={handleOnchange} type="text" placeholder="What's your father name?" value={contact.lastname}/>
         <input name="email" onChange={handleOnchange} type="email" placeholder="What's your email address" value={contact.email}/>
         <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
