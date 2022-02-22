import React, { useState } from 'react'
import { Form, Row, Col, FloatingLabel, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { API } from '../API';
import './ItemStyles.css'

const NewLahenga = ({ handleSubmit, currentUser }) => {

    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState(null);
    const navigate = useNavigate();

    const INITIAL_STATE = {
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
        image: "https://kalkifashion.com.imgeng.in/media/catalog/product/e/v/evergreen-and-maroon-saree-in-satin-blend-with-patola-print-and-gotta-patti-embroidered-border-design-online-kalki-fashion-k1141974y-sg74993_2_.jpg?imgeng=/w_317/h_448"
    }

    const [imagesState, setImagesState] = useState({
        image2: "",
        image3: ""
    })

    const [loginFormData, setloginFormData] = useState(INITIAL_STATE);
    
    async function handleSubmit(e) {
        try {
            e.preventDefault()
            uploadImages();

            let newLahenga = await API.uploadLahenga({seller_username: currentUser.customer.username,
                sale_price: loginFormData.price,
                ...loginFormData})
            if(newLahenga.lahenga){
                setFlag(true);
                setValue(`${loginFormData.name} has been added`)
                setloginFormData(INITIAL_STATE);
            } else {
                //not sure if this will ever be hit
                console.log(newLahenga)
                setFlag(true)
                setValue(newLahenga.Error)
            }
        } catch (e) {
            const err = e[0].split(".");
            setFlag(true)
            setValue(err[1])
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const uploadImages = async () => {
        let imageField2 = document.getElementById('#image2');
        let image2File = imageField2.files[0]

        console.log(`image2File is ${imageField2}`)

        let imageField3 = document.querySelector('#image3');
        let image3File = imageField3[0]

        let imageFieldArray = [image2File, image3File];

        for(let i=0; i<2; i++) {
            const { url } = await API.getImageUrl();
            API.postImageToS3({ url, imageFile: imageFieldArray[i] });
            API.uploadLahengaToDB(1, url);
        }
    }

    return (
        <div>
            <div className="mt-3">
            {flag && 
                <Alert variant="warning">{value}</Alert>
            }
            </div>
            <Form onSubmit = {handleSubmit}>
                <Row>
                <Col className="col-5 me-auto">
                <Form.Group>
                    <Row>
                        <Col>
                        <FloatingLabel label="Name">
                        <Form.Control 
                            type="text" 
                            name = "name"
                            placeholder="Name"
                            className="mt-4"
                            value = {loginFormData.name}
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
                                name = "length"
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
            <Form.Label>Images</Form.Label>
            </Col>
            <Col className="col-9 me-auto">
                <Form.Control 
                    type="string" 
                    name = "image"
                    className="mt-4"
                    value = {loginFormData.image}
                    onChange = {handleChange}
                />
            </Col>
            <Col className="col-3 mt-4 me-auto text-start">
            </Col>
            <Col className="col-9 me-auto">
                <Form.Control 
                    type="file"
                    id="image2"
                    name = "image2"
                    accept=".jpeg, .png, .jpg"
                    className="mt-4"
                    value = {imagesState.image2}
                    onChange = {handleChange}
                />
            </Col>
            <Col className="col-3 mt-4 me-auto text-start">
            </Col>
            <Col className="col-9 me-auto">
                <Form.Control 
                    type="file"
                    id="image3"
                    name = "image3"
                    accept=".jpeg, .png, .jpg"
                    className="mt-4"
                    value = {imagesState.image3}
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