import React, { Component } from "react";
import "../addItem/addItem.style.css";

//bootstrap
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

class AddItem extends Component {
  url = "https://localhost:44367/api/TodoTasks/";

  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  async sendTodo() {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ TaskDescription: this.state.todo }),
    };

    await fetch(this.url, reqOptions)
      .then((res) => res.json())
      .then((text) => console.log(text));

    // window.location.reload(false);
  }

  render() {
    return (
      <div className="AddItem">
        {/* <label>
          Add New Todo
          <input
            type="text"
            onChange={(e) => this.setState({ todo: e.target.value })}
          ></input>
        </label>
        <div>
          <Button onClick={() => this.sendTodo()}>Add</Button>
        </div> */}

        <Form>
          <Row>
            <Col md={3}></Col>

            <Col md={6}>
              <Form.Group id="input" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Wprowadz TodoTask"
                  onChange={(e) => this.setState({ todo: e.target.value })}
                />
                <Form.Text className="text-muted">
                  Tutaj mozna bledy dawac
                </Form.Text>
              </Form.Group>

              <Button
                id="buttonSubmit"
                variant="success"
                type="submit"
                onClick={() => this.sendTodo()}
              >
                Submit
              </Button>
            </Col>

            <Col md={3}></Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddItem;
