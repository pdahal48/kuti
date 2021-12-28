import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'

const CustomerSignUpForm = ({ handleModalsClose }) => {
  
    const history = useNavigate()
    const [loginFormData, setloginFormData] = useState({
        email: "",
        fullName: "",
        username: "",
        password: ""
    });

    async function handleSubmit(e) {
        console.log(`submitted`)
        e.preventDefault()
        // let user = await loginUser(loginFormData)
        // if(user.success){
        //     history.push('/')
        // } else {
        //     setFlag(true)
        //     setValue(user.errors[0])
        // }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="login-body">
        <Row className="justify-content-center text-center">
        <Col className="col-8">
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
                            value = {loginFormData.fullName}
                            onChange = {handleChange}
                        />
                    <Form.Control 
                            type="text" 
                            name = "email"
                            placeholder="Email"
                            className="mt-2"
                            value = {loginFormData.email}
                            onChange = {handleChange}
                        />
                        <Form.Control 
                            type="text" 
                            name = "username"
                            placeholder="Username"
                            className="mt-2"
                            value = {loginFormData.username}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password"
                            name = "password"
                            placeholder="Password"
                            className="mt-2"
                            value = {loginFormData.password}
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
