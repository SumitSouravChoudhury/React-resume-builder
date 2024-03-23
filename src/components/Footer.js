import React from 'react'
import Container from 'react-bootstrap/Container';

function Footer() {

  let year = new Date().getFullYear();
  return (
    <Container fluid  className="border-top mt-2 text-center bg-light text-dark py-3">
        <p className="m-0">&copy; Copyright By Sumit Sourav Choudhury {year}</p>
    </Container>
  )
}

export default Footer