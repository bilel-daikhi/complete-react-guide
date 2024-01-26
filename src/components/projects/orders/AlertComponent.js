import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
const AlertComponent = (props)=>{
    const [show, setShow] = useState(true);

    //alert-warning &&  alert-success
    return ( 
   <>
      <Alert show={show} variant={props.variant}>
         
        <p>
        {props.message}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

  
    </>
 
    );
}
export default AlertComponent;