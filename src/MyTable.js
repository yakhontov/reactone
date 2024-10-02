import Table from "react-bootstrap/Table"
import "./App.css"

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
    console.log(props)
    return (
        <div>
            <Table striped hover responsive="sm">
                <thead>
                    <tr>
                        <th>Date, time (UTC)</th>
                        <th>Coordinates, RAW packet</th>
                    </tr>
                </thead>
                <tbody>
                    {props.packets.map((element) => {
                        return (
                            <MyRow
                                dateTime="2354"
                                packet={element.toString()}
                            />
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
