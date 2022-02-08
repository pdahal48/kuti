import React from 'react';
import { Table } from 'react-bootstrap';

const SoldItemsTable = () => {
    return (
        <div>
            <h3>Sold Items</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product Number</th>
                    <th>Item</th>
                    <th>Customer</th>
                    <th>Price</th>
                    <th>Fee Paid</th>
                    <th>Tracking Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nepali Saree</td>
                    <td>Birendra Bajgai</td>
                    <td>$54.99</td>
                    <td>$2.99</td>
                    <td>2323232423231232</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Indian Saree</td>
                    <td>mithura sahadev</td>
                    <td>$66.99</td>
                    <td>$3.49</td>
                    <td>3434323423423523</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Sri-lankan Saree</td>
                    <td>Uduppa khuduppa</td>
                    <td>$69.69</td>
                    <td>$3.99</td>
                    <td>5434534534532323</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default SoldItemsTable;