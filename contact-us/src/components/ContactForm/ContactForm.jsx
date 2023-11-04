import {MdMessage} from "react-icons/md"
import {MdCall} from "react-icons/md"
import {MdEmail} from "react-icons/md"
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
 
  const  onSubmit = (event)=> {

event.preventDefault();
setName (event.target[0].value)
setEmail (event.target[1].value)
setText (event.target[2].value)
}
  

  
  return (
    <section className= {styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
      <Button  text = "VIEW SPPORT CHAT"icon = {<MdMessage fontSize= "24px"/> }/>
      <Button text = "VIA CALL"icon = {<MdCall fontSize= "24px"/>}/>
      
      </div>
      
<form onSubmit={onSubmit} action="">
<div className={styles.form_control}>

<label htmlFor="name">Name </label>
<input type="text" name="name" />

</div>


<div className={styles.form_control}>

<label htmlFor="email">Email </label>
<input type="email" name="email" />

</div>

<div className={styles.form_control}>

<label htmlFor="text">Text </label>
<textarea type="text" rows={8}  />

</div>
<div style={{
  display: "flex",
  justifyContent: "end",
}}><Button 
      
      text = " Submit button"/></div>
<div>  {name +" "+email+" "+ text}</div>

</form>
      </div>
      
      <div className={styles.contact_image}>
       <img src="/images/call.png" alt="call" /> 
      </div>
    </section>
  );
}

export default ContactForm;
