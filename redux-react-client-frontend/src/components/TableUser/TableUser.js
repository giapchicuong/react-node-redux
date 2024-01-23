import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllUser, deleteUserRedux } from "../../action/actions";

const TableUser = () => {
  const dispatch = useDispatch();

  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  const handleDeleteUser = (item) => {
    dispatch(deleteUserRedux(item.id));
  };
  if (isError === false && isLoading === true) {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">Loading data...</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }

  if (isError === true && isLoading === false) {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">Something went wrong in service...</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }

  if (isError === false && isLoading === false) {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`users-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteUser(item)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    );
  }
};

export default TableUser;
