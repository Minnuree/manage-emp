import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = () => {
  const {updateEmployee} = useContext(EmployeeContext)

  
  
  return (
    <Form >
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" required 
        />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Control type="email" placeholder="Email *" required
        />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Control as="textarea" placeholder="Address *" rows={3} 
        />
      </Form.Group>
      <br/>
        <Form.Group>
          <Form.Control type="text" placeholder="Phone" 
          />
        </Form.Group>
        <br/>    
      

      <Button variant="success" type="submit" block>
        Update Employee
      </Button>
      <br/>
    </Form>
  );
};

export default EditForm;
