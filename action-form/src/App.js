import { Card } from 'react-bootstrap'

const App = () => {

  return (
    <section className="container">
      <>
        <Card>
          <Card.Body>
            <Card.Text>
              Some data.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              Some data.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    </section>
  );
}

export default App;
