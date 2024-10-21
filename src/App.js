import { PacketContext, LoadPacket } from "./PacketContext"
import Button from "react-bootstrap/Button"
import MyTable from "./MyTable"
import MyNavbar from "./MyNavbar"
import Container from "react-bootstrap/Container"
import Placeholder from "react-bootstrap/Placeholder"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Setting child container fill parent container's width and height
// https://dev.to/hmintoh/setting-child-container-fill-parent-container-s-width-and-height-1gdf
function App() {
    return (
        <div id="wrapper">
            {/* <MyNavbar /> */}
            <div id="nav">Navbar</div>
            <MyTable
                packets={Array(30)
                    .fill(null)
                    .map((element, index) => "string " + index)}
            ></MyTable>
            <div id="footer">footer</div>
        </div>
    )
}

export default App
