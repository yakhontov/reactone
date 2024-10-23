import React, { useContext } from "react"

export default function MyRow(props) {
    return (
        <tr>
            <td>{props.packet.serverdatetime}</td>
            <td>
                {/* {`gnss:${getGnssCount(props.packet)}, celllocate:${getGnssCelllocateCount(props.packet)}, opencellid:${getOpencellidCount(
                    props.packet
                )}, unwiredlabs:${getUnwiredlabsCount(props.packet)}, `} */}

                <span className="mybadge" style={{ backgroundColor: "blue" }} hidden={props.packet.gnss.length == 0}>
                    GNSS: {props.packet.gnss.length.toString()}
                </span>

                <span className="mybadge" style={{ backgroundColor: "red" }} hidden={props.packet.celllocate.length == 0}>
                    Celllocate: {props.packet.celllocate.length.toString()}
                </span>

                <span className="mybadge" style={{ backgroundColor: "green" }} hidden={props.packet.nearestcellscoords == 0}>
                    Opencellid: {props.packet.nearestcellscoords.toString() + "/" + props.packet.nearestcellscount.toString()}
                </span>

                <span className="mybadge" style={{ backgroundColor: "magenta" }} hidden={props.packet.unwiredlabscoords == 0}>
                    Unwiredlabs: {props.packet.unwiredlabscoords.toString()}
                </span>

                <img
                    height="25px"
                    src="./nodata.svg"
                    alt="No data"
                    hidden={props.packet.gnss.length + props.packet.celllocate.length + props.packet.nearestcellscoords + props.packet.unwiredlabscoords != 0}
                />

                {/* <span className="mybadge" style={{ backgroundColor: "#" + `${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                    Opencellid: {props.packet.nearestcellscoords.toString() + "/" + props.packet.nearestcellscount.toString()}
                </span> */}

                {/* <span className="mybadge" style={{ backgroundColor: "blue" }}>
                    Span
                </span> */}
            </td>
        </tr>
    )
}
