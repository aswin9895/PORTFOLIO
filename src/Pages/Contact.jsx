import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import myStyle from '../Style.module.css'
import emailjs from '@emailjs/browser';
import { Flip, ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_rbrxy86'
    const templateId = 'template_j6ckl4a'
    const publicKey = 'eYAu8kwUrfkKvguqG'

    const templateParams = {
      from_name: name,
      from_email: Email,
      message: Message
    }

    if (name, Email, Message) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
        toast.success('Message Sent Successfully!!!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
        setName('')
        setEmail('')
        setMessage('')
      }).catch((error) => {
        console.log(error);
      })
    } else {
      toast.warn('Please Provide Complete Details!!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    }
  }

  return (
    <div className='container' style={{ minHeight: "100vh", paddingTop: "120px" }}>
         <ToastContainer position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Flip} />
      <div>
        <h5 className='text-light fs-2 fw-bolder text-center'>CONTACT ME</h5>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center w-50'>
          <div style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className=' mt-4 border rounded p-5'>
            <Form style={{ backgroundColor: "transparent" }}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} className='text-dark' type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={Email} onChange={(e) => setEmail(e.target.value)} className='text-dark' type="email" placeholder="Email ID" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control value={Message} onChange={(e) => setMessage(e.target.value)} className='text-dark' as="textarea" placeholder='Type Your Message' rows={5} />
              </Form.Group>
            </Form>
            <div style={{ textAlign: "center", width: "100%", backgroundColor: "transparent" }}><button onClick={handleSubmit} className={myStyle.contactSendButton}>SEND</button></div>
            <hr className='fs-1 text-light' />
            <div className='text-center bg-transparent'>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} href="https://www.instagram.com/aswin__ks__/" target='_blank'><button className={myStyle.landingContactButton}><i class="fa-brands fa-instagram bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="https://www.linkedin.com/in/aswin-saseendran/"><button className={myStyle.landingContactButton}><i class="fa-brands fa-linkedin-in bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="https://wa.me/9061838103"><button className={myStyle.landingContactButton}><i class="fa-brands fa-whatsapp bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="mailto:aswinsaseendran06@gmail.com"><button className={myStyle.landingContactButton}><i class="fa-regular fa-envelope bg-transparent"></i></button></a>
            </div>
            <hr className='fs-1 text-light' />
            <div className='d-flex justify-content-evenly align-items-center flex-wrap bg-transparent'>
              <div className='bg-transparent text-center'>
                <p className='text-light mt-1 pb-3 bg-transparent'><i class="fa-regular fa-envelope bg-transparent"></i> aswinsaseendran06@gmail.com</p>
              </div>
              <div className='bg-transparent text-center'>
                <p className='text-light mt-1 pb-3 bg-transparent'><i class="fa-solid fa-phone bg-transparent"></i> +91 9061838103</p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact