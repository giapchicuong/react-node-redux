import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../../action/actions";

const FormAddNew = (props) => {
  const defaultUserData = {
    email: "",
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultUserData);
  const dispatch = useDispatch();
  const isCreating = useSelector((state) => state.user.isCreating);
  const handleCreateNewUser = () => {
    dispatch(createNewUserRedux(userData));
    setUserData(defaultUserData)
  };
  return (
    <>
      <Container>
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            disabled={isCreating}
            onClick={() => handleCreateNewUser()}
          >
            Create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAddNew;
