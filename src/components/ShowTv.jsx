import { Form } from "react-bootstrap";

const ShowsTV = () => {
  return (
    <div>
      <h1 className="text-white">TV Shows</h1>
      <Form.Group controlId="search">
        <Form.Label className="text-white">Search</Form.Label>
        <Form.Control type="text" placeholder="Cerca Serie TV.." />
        <button className="btn btn-primary mt-2">Cerca</button>
      </Form.Group>
    </div>
  );
};

export default ShowsTV;
