
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'


function About({ data }) {
  return (
    <Layout>
      <Seo title="Nosotros" />
      <div className='nosotros'></div>
      <Cabecera
        titulo2="Nosotros"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.file.childImageSharp.fluid}
      />
      <Container className='mb-5'>
        <div className="subTitulo mb-4">
          <h3 className="text-center">Ingeniería en Sistemas Computacionales</h3>
        </div>
        <Row className="justify-content-md-center">
          {/* <Col md={6} className="m-auto">
            <StaticImage src="../images/inicio.jpg" alt="UPA Logo" />
          </Col> */}
          <Col md={12}>
            <div className="textoJustificado">
              <h3>Misión</h3>
              <p>
                Formar profesionistas capaces de resolver problemas mediante el
                pensamiento crítico, ético y novedoso, con un sistema integrado
                de innovación tecnológica y de investigación a través de la
                ingeniería de software y/o la gestión de redes de comunicación,
                capaces de interactuar en proyectos multidisciplinarios
                orientados a la adecuada toma de decisiones, ofreciendo
                soluciones para la mejora de la comunidad y su entorno.
              </p>
              <h3>Visión</h3>
              <p>
                La carrera de ISC es reconocida como una comunidad profesional y
                académica con altos estándares orientados a la vanguardia,
                comprometidos con la investigación, el desarrollo tecnológico y
                humano, en la búsqueda de la mejora de su entorno mediante una
                formación por competencias.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="textoJustificado">Como derivado el programa académico de Ingeniería en Sistemas Estratégicos de Información, el programa académico
              de ISC cuenta con los siguientes reconocimientos:</p>
            <div className="textoJustificado">
              <h4>Reconocimientos:</h4>
              <ul>
                {/* <li>
                  El programa académico de Ingeniería en Sistemas Estratégicos de
                  Información, desde 2016, ha formado parte del Padrón de
                  Programas de Licenciatura de Alto Rendimiento Académico de
                  CENEVAL, siendo uno de los pocos que programas académicos de Ingeniería en Software en todo el país dentro del padrón.
                </li>
                <li> Cuenta con los reconocimientos a la calidad educativa tanto de CIEES como  de CONAIC.
                </li> */}
                <li>
                  La UPA está certificada en ISO 9001:2014 (Sistemas de Gestión
                  de Calidad), ISO 14001:2014 (Sistema de Gestión Ambiental), NMX-R-025 (Igualdad laboral y no discriminación) lo cual
                  asegura la calidad de nuestros procesos.
                </li>
                <li>Además, la universidad se encuentra incorporada a ANUIES (Asociación Nacional de Universidades e Instituciones de Educación Superior).</li>


              </ul>
            </div>
          </Col>
        </Row>


      </Container>

      
    </Layout>
  )
}


export default About;

export const query = graphql`
query bannerAbout{
  file(relativePath: {eq: "nosotros/inicio.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;