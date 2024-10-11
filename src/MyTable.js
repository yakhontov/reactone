import React, { useContext } from "react"
import Table from "react-bootstrap/Table"
import "./App.css"
import { PacketContext, LoadPacket } from "./PacketContext"

function MyRow(props) {
    return (
        <tr>
            <td>{props.dateTime}</td>
            <td>{props.packet}</td>
        </tr>
    )
}

// Fixed header
// https://github.com/mdbootstrap/bootstrap-table-fixed-header
export default function MyTable(props) {
    const value = useContext(PacketContext)
    console.log(props)
    console.log(value)
    return (
        <div class="object-fit-fill">
            <Table striped hover responsive="sm">
                <thead>
                    <tr>
                        <th>Date, time (UTC)</th>
                        <th>Coordinates, RAW packet</th>
                    </tr>
                </thead>
                <tbody>
                    {props.packets.map((element, index) => {
                        return <MyRow key={index} dateTime="2354" packet={element.toString()} />
                    })}
                </tbody>
            </Table>
        </div>
    )
}
