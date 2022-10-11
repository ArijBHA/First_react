import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cupcake1 from './cupcake-1.jpeg'
import cupcake3 from './cupcake-3.jpeg'
function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={cupcake1} />
        <Card.Body>
          <Card.Title>OUR CARDS</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={cupcake3} />
        <Card.Body>
          <Card.Title>OUR CARDS</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="cupcake-2.jpeg" />
        <Card.Body>
          <Card.Title>OUR CARDS</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;