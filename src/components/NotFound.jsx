import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="text-white">404 - Not Found!</h1>
      <Button onClick={() => navigate("/")}>TORNA IN DIETRO</Button>
    </div>
  );
};

export default NotFound;
