import { Modal, Form, Col, Row } from "react-bootstrap";

function AddCompanyAddressDetailsModal(props) {
  const {
    action,
    handleSubmit,
    show,
    onHide,
    // handleDelete,
    // showDelete,
    // onHideDelete,
  } = props;

  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-xl">
            {action} Company Address Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="overlay overlay-block cursor-default">
          <Form autoComplete="off">
            <Row>
              <Col md="6">
                <Form.Group controlId="Asset_Name">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Asset Name"
                    // value={Asset_Name}
                    // onChange={changeAsset_Name}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="6"></Col>
            </Row>
            <Row></Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="submit"
            // disabled={!validFields([Asset_Name, Status])}
            onClick={handleSubmit}
            className="btn btn-primary btn-elevate"
          >
            {action} Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddCompanyAddressDetailsModal;
