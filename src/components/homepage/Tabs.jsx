import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function NewsTab() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item className="tab-text">
              <Nav.Link className="tab-text" eventKey=" first">
                Каналы
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" second">
                Live Tv
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" third">
                Adsmart
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" fourth">
                detikx
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" fifth">
                Foto
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" sixth">
                Sepakbola
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" seventh">
                Hikman
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey=" eighth">
                Pasangmata
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey="tab-text ninth">
                Edukasi
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-text" eventKey="tab-text tenth">
                Berbuatbaik.id
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        {/* <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              alias voluptas provident perspiciatis et repellendus saepe
              corrupti asperiores nihil, at omnis dolore accusantium explicabo
              fugit voluptatibus aspernatur est illo dolores.
            </Tab.Pane>
            <Tab.Pane eventKey="second">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              aspernatur earum repellendus fuga iure incidunt suscipit maiores
              omnis eum perferendis nesciunt animi, tempore quis quas totam
              consequatur! Aut, corporis possimus?
            </Tab.Pane>
          </Tab.Content>
        </Col> */}
      </Row>
    </Tab.Container>
  );
}

export default NewsTab;
