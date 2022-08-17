import "./Contact.css"
import Button from 'react-bootstrap/Button'
import React, { useRef } from "react"
import emailjs from '@emailjs/browser';

const FirstLayer = () => {

    // Ref react component to use for the contact form
    const form = useRef();

    // EmailJs function that sends contact information straight to my email
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_skonrz5', 'template_ffguqyy', form.current, '6KZMCg9C8JjNcQe97', {
      }) .then((result) => {
            alert("Thanks for the message!")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    return (
        <div className="container FirstLayer col-lg-10 col-md-8 col-sm-6">

            {/* Heading for contact page */}
            <h1>Contact or message me directly.</h1>

            {/* Contact form */}
            <form ref={form} onSubmit={sendEmail}>
                
                {/* Name Field */}
                <div class="form-group formName">
                    <label for="exampleFormControlInput1">Name</label>
                    <input name="user_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                </div>

                {/* Email Field */}
                <div class="form-group formEmail">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input name="user_email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                {/* Message field */}
                <div class="form-group formMessage">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Mesesage"></textarea>
                </div>

                {/* Submit button */}
                <Button type="submit" variant="dark">Submit</Button>
            </form>

            {/* Email */}
            <h3>My email is <b>nathan.lapak@gmail.com</b> </h3>
            <h3>Thanks for reaching out!</h3>
        </div>
    )
}

export default FirstLayer