import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({theEmployee}) => { // theEmployee şeklinde yakaladım. Employeeden EditForma prop gönderdik
  const {updateEmployee} = useContext(EmployeeContext)

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = {id, name, email, address, phone};

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee); //id miz ve güncellenmiş bilgi
  }

  
  
  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} required 
        />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Control type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required
        />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Control as="textarea" placeholder="Address *" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} 
        />
      </Form.Group>
      <br/>
        <Form.Group>
          <Form.Control type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} value={phone}
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
