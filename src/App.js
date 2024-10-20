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
    // return (
    //     <div class="wrapper">
    //         <nav>navbar</nav>
    //         <main>body</main>
    //         <footer>footer</footer>
    //     </div>
    // )
    return (
        // <PacketContext.Provider value={{ str: "Hello, world" }}>
        <div className="App ">
            <MyNavbar />
            <div className="row">
                <div className="column">Some text</div>
                <div className="column">
                    {/* Some text2 */}
                    <MyTable
                        packets={Array(30)
                            .fill(null)
                            .map((element, index) => "string " + index)}
                    ></MyTable>
                </div>
            </div>
            {/* <main>body</main> */}

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
