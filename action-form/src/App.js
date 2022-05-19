import React from 'react'
import { ListGroup } from 'react-bootstrap'


const App = () => {


  return (
    <>
      <section className="fixed-container">
        <div className="container-fluid">
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                First Data
              </div>
            </ListGroup.Item><br />
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Second Data
              </div>
            </ListGroup.Item><br />
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Third Data
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </section>
    </>
  );
}

export default App;
