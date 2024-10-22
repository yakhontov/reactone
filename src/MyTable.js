import React, { useContext } from "react"
import Table from "react-bootstrap/Table"
import "./MyTable.css"
import { PacketContext, LoadPackets } from "./PacketContext"
import MyRow from "./MyRow"

// Create an HTML Table with Fixed Header and Scrollable Body
// https://wpdatatables.com/html-table-with-fixed-header-and-scrollable-body/

// Fixed header
//
export default function MyTable(props) {
    LoadPackets()
    const value = useContext(PacketContext)
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Date, time (UTC)</th>
                    <th>Coordinates, RAW packet</th>
                </tr>
            </thead>
            <tbody>
                {props.packets.map((element, index) => {
                    return <MyRow key={index} packet={element} />
                })}
                {/* {props.packets.map((element, index) => {
                    return <MyRow key={index} dateTime="2354" packet={element.toString()} />
                })} */}
            </tbody>
        </Table>

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
