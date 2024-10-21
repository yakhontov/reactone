import { PacketContext, LoadPacket } from "./PacketContext"
import Button from "react-bootstrap/Button"
import MyTable from "./MyTable"
import MyNavbar from "./MyNavbar"
import Container from "react-bootstrap/Container"
import Placeholder from "react-bootstrap/Placeholder"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { TestData } from "./TestData"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

// Setting child container fill parent container's width and height
// https://dev.to/hmintoh/setting-child-container-fill-parent-container-s-width-and-height-1gdf
export default function App() {
    return (
        <>
            <MyNavbar />
            <Container fluid>
                <Row>
                    <Col>
                        <MapContainer center={[29.794502, -95.370513]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[29.794502, -95.370513]} title="asdjkg">
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                            <Marker position={[29.797502, -95.371513]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Col>
                    <Col>
                        <MyTable
                            packets={TestData}
                            // packets={Array(50)
                            //     .fill()
                            //     .map((element, index) => "string " + index)}
                        ></MyTable>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
