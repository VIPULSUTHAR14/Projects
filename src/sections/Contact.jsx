import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const FromRef = useRef();
  const [loading, setLoading] = useState(false);
  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const HandleChange = ({target: {name,value}}) => {
    setForm({...Form, [name]: value})
  };
  const HandleSubmit = async (e) => {
    try{
      e.preventDefault();
      emailjs.send(
        'service_8h4pmql',
       'template_jll8bjp',
       {
        from_name: Form.name,
        to_name: "Vipul Suthar",
        from_email: Form.email,
        to_email: "vipulsutharwork@gmail.com",
        message: Form.message
       },
       'cDpZrLdt4_hsMtbsF'
      )

      setLoading(false)
      alert("Your Message Has Been Sent")
      setForm({
        name: "",
        email: "",
        message: "",
      })
    } 
    catch (error){
      setLoading(false)
      console.log(error)
      alert("Something Went Wrong")
    }
   
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex justify-center items-center flex-col ">
        {/* <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        /> */}
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I am a passionate web developer who has been learning and exploring
            web development for over a year. Driven by a love for coding, I
            strive to create innovative and user-friendly websites. With a
            strong foundation in HTML, CSS, JavaScript, tailwind CSS , and React
            js . I am eager to take on new challenges and contribute to the
            ever-evolving world of web development.
          </p>

          <form
            ref={FromRef}
            onSubmit={HandleSubmit}
            className="mt-12 flex flex-col space-y-3"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input 
              type="text" 
              className="field-input"
              placeholder="Vipul Suthar"
              name="name"
              value={Form.name}
              onChange={HandleChange}
              required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input 
              type="email" 
              className="field-input"
              placeholder="vipulsutharwork@gmail.com"
              name="email"
              value={Form.email}
              onChange={HandleChange}
              required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea  
              className="field-input"
              placeholder="Hi , i am here to offer you a job....."
              name="message"
              value={Form.message}
              onChange={HandleChange}
              required
              rows={5}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading} >
                {loading? "Sending..." : "Send Message"}
                <img src="/assets/arrow-up.png" alt="arrow_up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
