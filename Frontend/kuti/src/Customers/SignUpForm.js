import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Form, Row, Col, Alert } from 'react-bootstrap'

const CustomerSignUpForm = ({ handleModalsClose, signupCustomer }) => {
  
    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)
    const navigate = useNavigate()

    const [signupFormData, setsignupFormData] = useState({
        email: "",
        fullName: "",
        username: "",
        password: ""
    });

    async function handleSubmit(e) {
        e.preventDefault()
        let user = await signupCustomer(signupFormData);
        if(user.success){
            navigate('/')
        } else {
            setFlag(true)
            setValue(user.Error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setsignupFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="signup-body">
        <Row className="justify-content-center text-center">
        <Col className="col-8">
        {flag && 
            <Alert variant="warning">{value}</Alert>
        }
            <div className = "card my-5">
                <div className = "card-body">
                <Row className="login-icon mb-3">
                    <Col className="col-12">
                        <img src="https://medias.utsavfashion.com/skin/frontend/ultimo/default/images/utsavfashion-logo.png"></img>
                    </Col>
                </Row>
                <Col>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group>
                    <Form.Control 
                            type="text" 
                            name = "fullName"
                            placeholder="Full Name"
                            className="mt-2"
                            value = {signupFormData.fullName}
                            onChange = {handleChange}
                        />
                    <Form.Control 
                            type="text" 
                            name = "email"
                            placeholder="Email"
                            className="mt-2"
                            value = {signupFormData.email}
                            onChange = {handleChange}
                        />
                        <Form.Control 
                            type="text" 
                            name = "username"
                            placeholder="Username"
                            className="mt-2"
                            value = {signupFormData.username}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password"
                            name = "password"
                            placeholder="Password"
                            className="mt-2"
                            value = {signupFormData.password}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="submit"
                            value = "Submit"
                            className="mt-3"
                            className="btn btn-primary mt-2"
                        />
                    </Form.Group>

                    <Row className="mt-2">
                        <Col onClick = {handleModalsClose} className="register-link text-start text-sm">
                            <Link to="/seller-registration">
                                Seller Registration
                            </Link>
                        </Col>
                    </Row>
                </Form>
                </Col>
                </div>
                </div>
                </Col>
        </Row>
        </div>
    )
}

export default CustomerSignUpForm;
