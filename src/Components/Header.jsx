import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import prflogo from '../assets/Profile logo.png'
import myStyle from '../Style.module.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div style={{position:"fixed",width:"100%",zIndex:"5"}} className=''>
            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Link style={{ textDecoration: "none" }} to={'/'}>
                        <Navbar.Brand>
                            <img width={'80px'} src={prflogo} alt="Profile_Logo" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-transparent border-light text-light' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={'/'} style={{ textDecoration: "none" }} className='me-3'><p className={myStyle.headernavLinks}>HOME</p></Link>
                            <Link to={'/skills'} style={{ textDecoration: "none" }} className='me-3'><p className={myStyle.headernavLinks}>SKILLS</p></Link>
                            <Link to={'/projects'} style={{ textDecoration: "none" }} className='me-3'> <p className={myStyle.headernavLinks}>PROJECTS</p></Link>
                            <Link to={'/about'} style={{ textDecoration: "none" }} className='me-3'> <p className={myStyle.headernavLinks}>ABOUT ME</p></Link>
                            <Link to={'/contact'} style={{ textDecoration: "none" }} className='me-3'><p className={myStyle.headernavLinks}>CONTACT ME</p></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header