import React from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8ajnrtf', 'template_sbktwtq', e.target, "user_8mOu6Ux8aubBUm4sw17sd")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      

  }

  return (
    <form    onSubmit={sendEmail}>
 
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" name="name"/>
    <label class="form-label" for="form4Example1">Name</label>
  </div>


  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="form-control" name="email" />
    <label class="form-label" for="form4Example2">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" name="subject"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>


 


  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
</form>
/* =========================================================
 */


  /*   <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */
  );
}