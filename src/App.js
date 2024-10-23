import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { createContext, useContext, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import MyTable from "./MyTable"
import MyNavbar from "./MyNavbar"
import { PacketsContext, LoadPacket } from "./PacketContext"
import { MyMap } from "./MyMap"

// Setting child container fill parent container's width and height
// https://dev.to/hmintoh/setting-child-container-fill-parent-container-s-width-and-height-1gdf
export default function App() {
    // TODO: Перенести этот контекст в MyTable и сделать setCurrentPackets глобальной для доступа из update button
    const [currentPackets, setCurrentPackets] = useState([])
    // console.log("currentPackets", currentPackets)
    return (
        <>
            <PacketsContext.Provider value={{ currentPackets, setCurrentPackets }}>
                <MyNavbar />
                <Container fluid>
                    <Row>
                        <Col>
                            <MyMap />
                        </Col>
                        <Col>
                            <MyTable />
                        </Col>
                    </Row>
                </Container>
            </PacketsContext.Provider>
        </>
    )
}
