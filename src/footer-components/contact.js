import emailjs from 'emailjs-com';
import "../App.css";

const Contact = () =>{
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'QaCinema', e.target, 'user_a3RE4vsdN1JFGjslyP32o')
          .then((result) => {
              console.log(result.text);
              alert("Thank you for submitting your contact request. We will be aiming to reach back to you shortly!");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
        <div className="col-sm-12">
            <div className="container-contact form-container">
                <form id="contactform" onSubmit={sendEmail} name="contact-form">
                    <label for="fname" className="form-input">Full Name</label>
                    <input type="text" id="fname" name="from_name" placeholder="Your full name.." required />
                    <label for="e-mail" className="form-input">E-mail Address</label>
                    <input type="email" id="e-mail" name="from_email" placeholder="example@example.com" required />
                    <label for="subject" className="form-input">Subject</label>
                    <textarea id="subject" name="inquiry_request" placeholder="Write something.." style={{height: 200 + 'px'}}
                        required></textarea>
                    <input type="submit" value="send" name="inquiry_request" id="submit" />
                </form>
            </div>
        </div>
    )
}
export default Contact;