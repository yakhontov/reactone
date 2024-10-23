import React, { useContext } from "react"
import { mapSetSelectedPacket } from "./MyMap"

export default function MyRow(props) {
    return (
        <tr onClick={() => mapSetSelectedPacket(props.packet)}>
            <td>{props.packet.serverdatetime}</td>
            <td>
                <span className="mybadge" style={{ backgroundColor: "MediumBlue" }} hidden={props.packet.gnss.length == 0}>
                    GNSS: <b>{props.packet.gnss.length.toString()}</b>
                </span>

                <span className="mybadge" style={{ backgroundColor: "Crimson" }} hidden={props.packet.celllocate.length == 0}>
                    Celllocate: <b>{props.packet.celllocate.length.toString()}</b>
                </span>

                <span className="mybadge" style={{ backgroundColor: "green" }} hidden={props.packet.nearestcellscoords == 0}>
                    Opencellid: <b>{props.packet.nearestcellscoords.toString() + "/" + props.packet.nearestcellscount.toString()}</b>
                </span>

                <span className="mybadge" style={{ backgroundColor: "DarkViolet" }} hidden={props.packet.unwiredlabscoords == 0}>
                    Unwiredlabs: <b>{props.packet.unwiredlabscoords.toString()}</b>
                </span>

                <img
                    height="25px"
                    src="./nodata.svg"
                    alt="No data"
                    hidden={props.packet.gnss.length + props.packet.celllocate.length + props.packet.nearestcellscoords + props.packet.unwiredlabscoords != 0}
                />
            </td>
        </tr>
    )
}
