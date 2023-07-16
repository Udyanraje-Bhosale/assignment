import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/contact.css'
const Contact = () => {
  return (
    <div className="most">
    <Container>
      <Row className='mb-5 mt-3'>
        <Col lg='8'>
          <h1 className='display-4 mb-4'>
            Contact Me
          </h1>
        </Col>
      </Row>

      <Row className='sec_sp'>
        <Col lg='5' className='mb-5'>
          <h3 className="color_sec py-4">
            Get In Touch
          </h3>
          <address>
            <strong>Email: </strong>
            <br/>
            <br/>
            <p>
              <strong>Phone: +91 </strong>
            </p>
          </address>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, perferendis?</p>
        </Col>
        <Col lg='7' className='d-flex align-items-center'>
          <form className='contact_form w-100'>
            <Row>
              <Col lg='6' className='form-group'>
                <input
                className='form-control'
                id='name'
                placeholder='Name'
                type='text'
                />
              </Col>
              <Col lg='6' className='form-group rounded-0'>
                <input
                className='form-control'
                id='Email'
                placeholder='Email'
                type='email'
                />
              </Col>
            </Row>
            <textarea className='form-control rounded-0' id='message' name='message' placeholder='message'  rows='5'></textarea>
            <br/>
            <Row>
              <Col lg='12' className='form-group'>
                <button className='btn ac_btn' type='submit'> Send</button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Contact