import React, { useContext } from "react"
import Table from "react-bootstrap/Table"
import "./MyTable.css"
import { PacketContext, LoadPacket } from "./PacketContext"

function MyRow(props) {
    return (
        <tr>
            <td>{props.dateTime}</td>
            <td>{props.packet}</td>
        </tr>
    )
}

// Create an HTML Table with Fixed Header and Scrollable Body
// https://wpdatatables.com/html-table-with-fixed-header-and-scrollable-body/

// Fixed header
//
export default function MyTable(props) {
    const value = useContext(PacketContext)
    console.log(props)
    console.log(value)
    return (
        <table className="fixed-header">
            <thead className="header">
                <tr>
                    <th>head 1</th>
                    <th>head 2</th>
                    <th>head 3</th>
                </tr>
            </thead>
            <tbody className="scrollable">
                <tr>
                    <td>body 1</td>
                    <td>body 2</td>
                    <td>body 3</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
                <tr>
                    <td>body 11</td>
                    <td>body 22</td>
                    <td>body 33</td>
                </tr>
            </tbody>
        </table>

        // <Table striped>
        //     <thead>
        //         <tr>
        //             <th>Date, time (UTC)</th>
        //             <th>Coordinates, RAW packet</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {props.packets.map((element, index) => {
        //             return <MyRow key={index} dateTime="2354" packet={element.toString()} />
        //         })}
        //     </tbody>
        // </Table>

        // <Table striped hover responsive="sm">
        // <Table striped>
        //     <thead>
        //         <tr>
        //             <th>Date, time (UTC)</th>
        //             <th>Coordinates, RAW packet</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {props.packets.map((element, index) => {
        //             return <MyRow key={index} dateTime="2354" packet={element.toString()} />
        //         })}
        //     </tbody>
        // </Table>
    )
}
