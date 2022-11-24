import Button from "react-bootstrap/Button";
import "./Navbar.css";

const LoginButton = (props) => {
  return (
    <>
      <Button>
        <a className="login-btn" href="/login">
          Login
        </a>
      </Button>
    </>
  );
};

export default LoginButton;
