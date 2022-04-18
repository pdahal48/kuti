import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const facebook = <FontAwesomeIcon icon={faFacebook} color="blue"/>
const instagram = <FontAwesomeIcon icon={faInstagram} color="#fb3958"/>
const youtube = <FontAwesomeIcon icon={faYoutube} color="#FF0000"/>

export function FooterContainer() {
    return (
        <Footer className="mt-5">
            <Footer.Wrapper>
            <Footer.Row className="container">
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Request a Refund</Footer.Link>
                    <Footer.Link href="#">Contact Form</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon/>{facebook} Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram bg-purple" />{instagram} Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />{youtube} Youtube</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}