import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";

function TvShows1() {
  return (
    <div className="pt-5">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn" role="group">
            <Dropdown as={ButtonGroup} className="ms-4 mt-1 custom-dropdown">
              <Button
                variant="secondary"
                aria-expanded="false"
                className="rounded-0  px-4 no-border-right"
                style={{ backgroundColor: "#221f1f" }}
              >
                Series
              </Button>
              <Dropdown.Toggle
                split
                variant="secondary"
                id="dropdown-split-basic"
                className="rounded-0 no-border-left "
                style={{ backgroundColor: "#221f1f" }}
              />
              <Dropdown.Menu style={{ backgroundColor: "#221f1f" }}>
                <Dropdown.Item className="text-white" href="#">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item className="text-white" href="#">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item className="text-white" href="#">
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </div>
  );
}

export default TvShows1;
