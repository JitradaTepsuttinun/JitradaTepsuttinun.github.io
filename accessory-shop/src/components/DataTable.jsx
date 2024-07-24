import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const DataTable = ({ data, onDelete, onFilter, onSortAsc, onSortDes }) => {
    const sRef = React.useRef()

    const handleSearch = () => {
        const keyword = sRef.current.value
        console.debug("Search", keyword)
        onFilter(keyword)
    }

    const handleDelete = (index) => {
        console.debug("Delete", index)
        onDelete(index)
    }

    const handleSortAsc = () => {
        onSortAsc()
    }

    const handleSortDes = () => {
        onSortDes()
    }


    return (
        <Container>
            <input type="text" placeholder="Search..." ref={sRef} />{' '}
            <i className="bi bi-search" onClick={() => handleSearch()}> </i>
            <i className="bi bi-arrow-up-square" onClick={() => handleSortAsc()}> </i>
            <i className="bi bi-arrow-down-square" onClick={() => handleSortDes()}> </i>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <i className="bi bi-trash" onClick={() => handleDelete(index)}></i>

                            </td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DataTable;
