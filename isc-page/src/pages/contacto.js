import React from 'react'
import { Col, Container, Form, Row, Button} from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Contacto({data}) {
    return (
      <Layout>
        <div className="contacto"></div>
        <Cabecera
            titulo2="Contáctanos"
            titulo1="Ingeniería en Sistemas Computacionales"
              imagen = {data.file.childImageSharp.fluid}
          />
        <Container>
          
        </Container>
        <Container>
          <Row className="mb-5">
            <Col className="p-3">
              <h4>Envía tu mensaje</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Correo:</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo" required/>
                  <Form.Text className="text-muted">
                    No compartiremos tu correo{" "}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control type="input" placeholder="Ingresa tu nombre" required/>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formTexto"
                >
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} required/>
                </Form.Group>
                <Button type='submit'>Enviar</Button>
              </Form>
            </Col>
            <Col>
              <h4>Ubicación</h4>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export const query = graphql`
 query bannerContacto{
   file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;