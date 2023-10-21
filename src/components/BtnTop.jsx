import { Col, Button } from 'react-bootstrap';
const BtnTop = props => {
  return (
    <div>
      <Col>
        <button
          className="tmbl-fix btn btn-danger rounded "
          onClick={props.scrollToTop}
        >
          <i className="fa-solid fa-chevron-up ms-1"></i>
        </button>
      </Col>
    </div>
  );
};

export default BtnTop;
