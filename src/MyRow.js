import React, { useContext } from "react"
import Table from "react-bootstrap/Table"

export default function MyRow(props) {
    return (
        <tr>
            <td>{props.dateTime}</td>
            <td>{props.packet}</td>
        </tr>
    )
}
