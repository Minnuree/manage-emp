import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const {addEmployee} = useContext(EmployeeContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  
  const handleSubmit= (e) => {
    e.preventDefault(); // varsayılan işlemleri engelleyip değerleri fonksiyonumuza göndermesini sağlıyoruz
    addEmployee(name, email, address, phone)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" required 
        value={name} //name alanına girilen değer
        onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Control type="email" placeholder="Email *" required
        value={email}
        onChange={e => setEmail(e.target.value)} 
        />
      </Form.Group>
      <br/>
      <Form.Group>
        <Form.Control as="textarea" placeholder="Address *" rows={3} 
        value={address}
        onChange={e => setAddress(e.target.value)}
        />
      </Form.Group>
      <br/>
        <Form.Group>
          <Form.Control type="text" placeholder="Phone" 
          value={phone}
          onChange={e => setPhone(e.target.value)}
          />
        </Form.Group>
        <br/>    
      

      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
      <br/>
    </Form>
  );
};

export default AddForm;
