import React, { useContext } from "react"
import Table from "react-bootstrap/Table"

function getGnssCount(packet) {
    console.log(packet.c)
    return packet.c?.startsWith("c") ? 1 : 0
}

function getGnssCelllocateCount(packet) {}

function getOpencellidCount(packet) {}

function getUnwiredlabsCount(packet) {}

export default function MyRow(props) {
    return (
        <tr>
            <td>{props.packet.serverdatetime}</td>
            <td>{`gnss:${getGnssCount(props.packet)}, celllocate:${getGnssCelllocateCount(props.packet)}, opencellid:${getOpencellidCount(
                props.packet
            )}, unwiredlabs:${getUnwiredlabsCount(props.packet)}, `}</td>
        </tr>
    )
}
