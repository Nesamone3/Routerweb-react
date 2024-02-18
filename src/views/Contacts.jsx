import { Card, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <Card.Text>
          If you have any questions, feel free to reach out to us at any time.
        </Card.Text>
        <Button variant="primary">Email Us</Button>
      </Card.Body>
    </Card>
  );
}

export default Contact;
