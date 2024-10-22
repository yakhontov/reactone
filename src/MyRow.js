import React, { useContext } from "react"
import Table from "react-bootstrap/Table"
import Badge from "react-bootstrap/Badge"

function getGnssCount(packet) {
    const coordsArray = coordStrToArray(packet.c)
    const count = coordsArray.length
    const coords = coordsArray.reduce((counter, element) => counter + (element.isCelllocate ? 0 : 1), 0) || 0
    return `${coords}/${count}`
}

function getGnssCelllocateCount(packet) {
    const coordsArray = coordStrToArray(packet.c)
    const count = coordsArray.length
    const coords = coordsArray.reduce((counter, element) => counter + (element.isCelllocate ? 1 : 0), 0) || 0
    return `${coords}/${count}`
}

function getOpencellidCount(packet) {
    const count = packet.nearestcells?.cells?.length || 0
    const coords = packet.nearestcells?.cells?.reduce((counter, element) => counter + (element.opencellid?.lat && element.opencellid?.lon ? 1 : 0), 0) || 0
    return `${coords}/${count}`
}

function getUnwiredlabsCount(packet) {
    const count = packet.nearestcells?.unwiredlabs ? 1 : 0
    const coords = packet.nearestcells?.unwiredlabs?.lat && packet.nearestcells?.unwiredlabs?.lon ? 1 : 0
    return `${coords}/${count}`
}

function coordStrToArray(coordStr) {
    if (!coordStr) return []
    const coordArray = []
    coordStr.split("|").forEach((coordParamsStr) => {
        const coordParamsParts = coordParamsStr.split(",")
        if (coordParamsParts.length >= 5) {
            try {
                // a29.783852,-94.625417,18:31:28_10.21.24,72308,4.16,2
                coordArray.push({
                    isCelllocate: coordParamsParts[0].startsWith("a"),
                    lat: parseFloat(coordParamsParts[0].startsWith("a") ? coordParamsParts[0].substring(1) : coordParamsParts[0]),
                    lon: parseFloat(coordParamsParts[1]),
                    dateTime: coordParamsParts[2],
                    accuracy: parseInt(coordParamsParts[3]),
                    charge: parseFloat(coordParamsParts[4]),
                })
            } catch (error) {
                console.error(error)
            }
        }
    })
    return coordArray
}

export default function MyRow(props) {
    return (
        <tr>
            <td>{props.packet.serverdatetime}</td>
            <td>
                {/* {`gnss:${getGnssCount(props.packet)}, celllocate:${getGnssCelllocateCount(props.packet)}, opencellid:${getOpencellidCount(
                    props.packet
                )}, unwiredlabs:${getUnwiredlabsCount(props.packet)}, `} */}

                {/* <Badge bg="primary">Primary</Badge>
                <Badge bg="secondary">Secondary</Badge>
                <Badge bg="success">Success</Badge>
                <Badge bg="danger">Danger</Badge>
                <Badge bg="warning" text="dark">
                    Warning
                </Badge>
                <Badge bg="info">Info</Badge>
                <Badge bg="light" text="dark">
                    Light
                </Badge>
                <Badge bg="green">Dark</Badge> */}
                <span className="basebadge" style={{ backgroundColor: "#" + `${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                    Span
                </span>
                <span className="basebadge" style={{ backgroundColor: "#" + `${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                    Span
                </span>
            </td>
        </tr>
    )
}
