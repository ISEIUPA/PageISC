import React from 'react'
import { Modal } from 'react-bootstrap';


function ModalMateria(props){
    return (
      <Modal
        {...props}
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             {props.materia.title} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
           <h5 className = "modalObjetivo"><span>Objetivo:</span> {props.materia.objetivo}</h5> 
           <h5 className = "modalObjetivo"> <span>Unidades de aprendizaje: </span></h5>
          <ul>
             { (props.materia.Unidades !== "") && props.materia.Unidades.map( unidad => (<li key = {unidad}>{unidad}</li>)) }  
          </ul> 

          {props.materia.creditos ? <h5 className='modalObjetivo'><span>Créditos: </span> {props.materia.creditos}</h5> :null}

          {/* <a className = "modalObjetivo" href={'../pdf/'+props.materia.title+'.pdf'} > {props.materia.title}</a>   */}
        </Modal.Body>
        {/*           <Modal.Footer>
            <Button onClick={props.onHide}>Cerrar</Button>
          </Modal.Footer> */}
      </Modal>
      );
}

export default ModalMateria
