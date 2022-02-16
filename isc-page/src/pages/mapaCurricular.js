import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ModalMateria from '../components/ModalMateria'
import Seo from '../components/Seo'
import materia from '../materias/materiasData.json'
import materias from '../materias/materias.json'


export default function MapaCurricular({ data }) {

  function setColorMateria(tipo) {
    var valor = 'btn-materia'
    switch (tipo) {
      case 'IDI': valor = 'btn-materia btn-idi'; break;
      case 'FIT': valor = 'btn-materia btn-fit'; break;
      case 'CCBB': valor = 'btn-materia btn-ccbb'; break;
      case 'ISC': valor = 'btn-materia'; break;
      default: valor = 'btn-materia;'
    }
    return valor;
  }

  const [modalShow, setModalShow] = React.useState(false);

  const [datosModal, setDatosModal] = React.useState({ title: "", tipo: "", creditos: "", objetivo: "", Unidades: "" })

  const DatosMateria = (nombre) => {
    const materiaDatos = (nombre !== "") ? materia.find(dato => dato.title === nombre) : { title: "No encontrado" }
    //console.log("Materia: ", materiaDatos)
    setDatosModal(materiaDatos)
    setModalShow(true)
  }

  const agregarClase = (nombre) => {
    const materiaExtras = (nombre !== "") ? materia.find(dato => dato.title === nombre) : { title: "No encontrado" }
    //console.log("atrobuptp_ ", materiaExtras.contribuye)
    let contribuye = ""
    let atribucion = ""
    if (materiaExtras.hasOwnProperty('contribuye')) {
      materiaExtras.contribuye.forEach(mat => {
        contribuye = document.getElementById(mat)
        //console.log(contribuye)
        contribuye.classList.add('btn-contribuye')
      })
    }

    if (materiaExtras.hasOwnProperty('atribucion')) {
      materiaExtras.atribucion.forEach(mat => {
        atribucion = document.getElementById(mat)
        //console.log(atribucion)
        atribucion.classList.add('btn-atribuye')
      })
    }
  }

  //Elimina las clases de contribución y atribución a
  const eliminarClase = () => {
    let contribuidores = document.getElementsByClassName('btn-contribuye')


    while (contribuidores.length > 0)
      contribuidores[0].classList.remove('btn-contribuye')

    let atribuidores = document.getElementsByClassName('btn-atribuye')
    while (atribuidores.length > 0)
      atribuidores[0].classList.remove('btn-atribuye')


    let actual = document.getElementsByClassName('btn-actual')
    Array.prototype.forEach.call(actual, function (element) {
      element.classList.remove('btn-atribuye')
    })
  }

  return (
    <Layout>
      <Seo title="Mapa Curricular" />
      <div className="mapaCurricular"></div>
      <Cabecera
        titulo2="Mapa Curricular"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.file.childImageSharp.fluid}
      />
      <Container className="justify-content-center text-center">
        <div className="subTitulo">
          <h3>Plan de estudios 2020</h3>
        </div>
      </Container>
      <Container className="mt-4 mb-4 text-center ">


        <ModalMateria show={modalShow} onHide={() => setModalShow(false)} materia={datosModal} />
      
        <Container fluid="md">
        <Row>
          {/*Primer ciclo */}
          <Col  md>
            <Row>
            <h5>Primer Ciclo</h5>
              <Col xs = {12} md={4} >
                {materias.primer.map(materia => (
                  <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                    onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                    {materia.title}
                  </Button>
                ))}
              </Col>
              <Col xs={12} md={4}>
                {materias.segundo.map(materia => (
                  <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                    onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                    {materia.title}
                  </Button>
                ))}
              </Col>
              <Col xs={12} md={4}>
                {materias.tercer.map(materia => (
                  <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                    onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                    {materia.title}
                  </Button>
                ))}
              </Col>
            </Row>
          </Col>

          {/*Segundo ciclo */}
          <Col  md>
            <Row>
            <h5>Segundo Ciclo</h5>
              <Col xs={12} md={4}>
                {materias.cuarto.map(materia => (
                  <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                    onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                    {materia.title}
                  </Button>
                ))}
              </Col>
              <Col xs={12} md={4}>
                {materias.quinto.map(materia => (
                  <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                    onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                    {materia.title}
                  </Button>
                ))}
              </Col>
              <Col xs={12} md={4}>
                {materias.sexto.map(materia => (
                  <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                    onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                    {materia.title}
                  </Button>
                ))}
              </Col>
            </Row>
          </Col>

          {/*Tercer ciclo */}
            <Col md>
              <Row>
              <h5>Tercer Ciclo</h5>
                <Col xs={12} md={4}>
                  {materias.septimo.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col xs={12} md={4}>
                  {materias.octavo.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col xs={12} md={4}>
                  {materias.noveno.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
          <Col md={12}>
            <Button className="btn-materia btn-estadia">Estadía</Button>
          </Col>
          </Row>
        </Container>

        
        {/* 
        <Row className="mt-5 mapaCurricular-tarjeta">
          <Col md={12} sm={6} className="mapaCurricular-header">
            <h4>Tercer Ciclo de Formación</h4>
          </Col>
          <Col md={12} sm={8}>
            <h5>Séptimo Cuatrimestre</h5>
            {materias.septimo.map(materia => (
              <Button className={setColorMateria(materia.tipo)} id={materia.title} key={materia.title} onClick={() => DatosMateria(materia.title)}
                onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                {materia.title}
              </Button>
            ))}
            <h5>Octavo Cuatrimestre</h5>
            {materias.octavo.map(materia => (
              <Button className={setColorMateria(materia.tipo)} id={materia.title} key={materia.title} onClick={() => DatosMateria(materia.title)}
                onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                {materia.title}
              </Button>
            ))}
            <h5>Noveno Cuatrimestre</h5>
            {materias.noveno.map(materia => (
              <Button className={setColorMateria(materia.tipo)} id={materia.title} key={materia.title} onClick={() => DatosMateria(materia.title)}
                onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                {materia.title}
              </Button>
            ))}
            <h5>Décimo Cuatrimestre</h5>
            <Button className="btn-materia">Estadía</Button>
          </Col>
        </Row>
                */}
      </Container>
    </Layout>
  )
}



export const query = graphql`
 query bannerMapa{
   file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;
