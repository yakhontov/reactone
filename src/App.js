import { PacketContext, LoadPacket } from "./PacketContext"
import Button from "react-bootstrap/Button"
import MyTable from "./MyTable"
import MyNavbar from "./MyNavbar"
import Container from "react-bootstrap/Container"
import Placeholder from "react-bootstrap/Placeholder"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

async function f() {
    // Ошибка подключения из-за CORS
    let headersList = {
        "Content-Type": "application/x-www-form-urlencoded",
    }

    let bodyContent = "loadtable=1&sim=21_81&limit=10"

    let response = await fetch("http://3.95.124.47/twiliosim/gprsconsole_test.class.php", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
    })

    let data = await response.text()
    console.log(data)
}

function App() {
    // console.log("")
    return (
        <div className="parent">
            <div>
                <h1>Text1</h1>
            </div>
            <div className="child">
                <h2>Text2</h2>
            </div>
        </div>
    )
    return (
        // <PacketContext.Provider value={{ str: "Hello, world" }}>
        <div className="App ">
            {/* full-screen */}
            <MyNavbar />
            {/* <div className="h-100"> */}
            <div>
                {/* <div className="child"> */}
                {/* <Placeholder className="full-screen" style={{ "background-color": "Khaki" }} /> */}
                {/* <Placeholder className="full-screen" style={{ "background-color": "red" }} /> */}
                <h1>Контент ребенка, который заполняет родителя по высоте</h1>
            </div>

            {/*<Container fluid full-height>
                <Row className="w-100 h-100">
                    <Col>
                        <Placeholder className="w-100 h-100" />
                    </Col>
                    <Col>
                        <Placeholder className="w-100 h-100" />
                    </Col>
                </Row>
            </Container> */}
            {/* <Container fluid className="  w-100 h-100">
                <Row className="w-100 h-100">
                    <Col className="w-100 h-100">
                        <MyTable
                            packets={Array(30)
                                .fill(null)
                                .map((element, index) => "string " + index)}
                        ></MyTable>
                    </Col>
                    <Col>
                        <Placeholder className="w-100 h-100" />
                    </Col>
                </Row>
            </Container> */}
        </div>
        // </PacketContext.Provider>
    )
}

export default App
