import React, { useState } from 'react'
import { Form, Row, Col, FloatingLabel, Alert } from 'react-bootstrap'
import './ItemStyles.css'

const NewLahenga = ({ handleSubmit }) => {

    const [loginFormData, setloginFormData] = useState({
        name: "",
        material: "",
        description: "",
        price: "",
        color: "",
        occassion: "",
        hip_size: "",
        waist_size: "",
        length: "",
        style: "",
        image: ""
    });

    async function handleSubmit(e) {
        console.log(`submitted`)
        e.preventDefault()
        // let user = await signupSeller(loginFormData)
        // if(user.success){
        //     navigate('/')
        // } else {
        //     setFlag(true)
        //     setValue(user.Error)
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
        <div>
            <Form onSubmit = {handleSubmit}>
                <Row>
                <Col className="col-5 me-auto">
                <Form.Group>
                    <Row>
                        <Col>
                        <FloatingLabel label="Name">
                        <Form.Control 
                            type="text" 
                            name = "Name"
                            placeholder="Name"
                            className="mt-4"
                            value = {loginFormData.Name}
                            onChange = {handleChange}
                        />
                        </FloatingLabel>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <FloatingLabel label="material">
                            <Form.Control 
                                type="text" 
                                name = "material"
                                placeholder="material"
                                className="mt-4"
                                value = {loginFormData.material}
                                onChange = {handleChange}
                            />
                            </FloatingLabel>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <FloatingLabel label="description">
                        <Form.Control 
                            type="text"
                            name = "description"
                            placeholder="description"
                            maxLength="50"
                            className="mt-4"
                            value = {loginFormData.description}
                            onChange = {handleChange}
                        />
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <FloatingLabel label="occassion">
                    <Form.Control 
                        type="text" 
                        name = "occassion"
                        placeholder="occassion"
                        className="mt-4"
                        value = {loginFormData.occassion}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>

                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <FloatingLabel label="Style">
                            <Form.Control 
                                type="string" 
                                name = "style"
                                placeholder="Style"
                                className="mt-4"
                                value = {loginFormData.style}
                                onChange = {handleChange}
                            />
                    </FloatingLabel>
                    </Col>
                </Row>
                </Form.Group>
                </Col>
                {/* break between here */}
                <Col className="col-2">
                </Col>
                <Col className="col-5 ms-auto">
            <Form.Group>
                <Row>
                    <Col >
                    <FloatingLabel label="price">
                    <Form.Control 
                        type="number" 
                        name = "price"
                        placeholder="price"
                        className="mt-4"
                        value = {loginFormData.price}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <FloatingLabel label="color">
                    <Form.Control 
                        type="text" 
                        name = "color"
                        placeholder="color"
                        className="mt-4"
                        value = {loginFormData.color}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                    <FloatingLabel label="Hip Size">
                    <Form.Control 
                        type="number" 
                        name = "hip_size"
                        placeholder="Business Email"
                        className="mt-4"
                        value = {loginFormData.hip_size}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <FloatingLabel label="Waist Size">
                    <Form.Control 
                        type="text" 
                        name = "waist_size"
                        placeholder="Waist Size"
                            className="mt-4"
                        value = {loginFormData.waist_size}
                        onChange = {handleChange}
                    />
                    </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel label="Length">
                            <Form.Control 
                                type="number" 
                                name = "phone_number"
                                placeholder="Length"
                                className="mt-4"
                                value = {loginFormData.length}
                                onChange = {handleChange}
                            />
                    </FloatingLabel>
                    </Col>
                </Row>
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col className="col-3 mt-4 me-auto text-start">
            <Form.Label>Image</Form.Label>
            </Col>
            <Col className="col-9 me-auto">
                <Form.Control 
                    type="file" 
                    name = "phone_number"
                    className="mt-4"
                    value = {loginFormData.length}
                    onChange = {handleChange}
                />
            </Col>
            </Row><Row>
            <Col className="col-3 mt-4 me-auto text-start">
            <Form.Label>Image</Form.Label>
            </Col>
            <Col className="col-9 me-auto">
                <Form.Control 
                    type="file" 
                    name = "phone_number"
                    className="mt-4"
                    value = {loginFormData.length}
                    onChange = {handleChange}
                />
            </Col>
            </Row><Row>
            <Col className="col-3 mt-4 me-auto text-start">
            <Form.Label>Image</Form.Label>
            </Col>
            <Col className="col-9 me-auto">
                <Form.Control 
                    type="file" 
                    name = "phone_number"
                    className="mt-4"
                    value = {loginFormData.length}
                    onChange = {handleChange}
                />
            </Col>
            </Row>
            
            <Form.Group>
                <Row className="container justify-content-center">
                    <Col className="mt-2">
                        <Form.Control 
                        type="submit"
                        value = "Submit"
                            className="mt-4"
                        className="btn btn-primary mt-2"
                        />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        </div>
    )
}

export default NewLahenga;