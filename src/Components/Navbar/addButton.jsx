import Button from "react-bootstrap/Button";
import "./Navbar.css";

const AddButton = (props) => {
  return (
    <>
      <Button onClick={props.handleVisibility}>
        <a className="login-btn" href="/add">
          Add Event
        </a>
      </Button>
    </>
  );
};

export default AddButton;
