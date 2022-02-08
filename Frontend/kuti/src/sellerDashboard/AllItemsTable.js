import React from 'react';
import { Table } from 'react-bootstrap';

const AllItemsTable = () => {
    return (
        <div>
            <h3>All Items</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product Number</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Upload Date</th>
                    <th>Status</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5</td>
                    <td>Indian Saree</td>
                    <td>Saree</td>
                    <td>01/10/2022</td>
                    <td>Listed</td>
                    <td>$43.99</td>
                </tr>
                <tr>
                <td>5</td>
                    <td>Banarase Saree</td>
                    <td>Saree</td>
                    <td>01/07/2022</td>
                    <td>Sold</td>
                    <td>$34.99</td>
                </tr>
                <tr>
                <td>5</td>
                    <td>Punjabi Lahenga</td>
                    <td>Lahenga</td>
                    <td>02/15/2022</td>
                    <td>Listed</td>
                    <td>$76.99</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default AllItemsTable;