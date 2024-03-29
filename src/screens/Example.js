import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div style={{ position: "relative", margin: "80px", border: "1px solid black", width: "300px", height: "200px" }}>
        <button onClick={handleShow}>Open Menu</button>
        <Offcanvas show={show} onHide={handleClose} placement={false}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Your offcanvas menu content goes here */}
            <p> hhhhhhhhhhhhhhhhhhhhhhhh </p>
            This is the offcanvas menu content.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
