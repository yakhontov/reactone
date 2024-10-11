import { PacketContext, LoadPacket } from "./PacketContext"
import Button from "react-bootstrap/Button"
import MyTable from "./MyTable"
import MyNavbar from "./MyNavbar"

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
        // <PacketContext.Provider value={{ str: "Hello, world" }}>
        <div className="App container-fluid h-100">
            {/* <div class="container-fluid"> */}
            <MyNavbar></MyNavbar>
            {/* </div> */}
            <div class="row ">
                <div class="col h-100">
                    <MyTable
                        packets={[
                            "elment0",
                            "elemrnt1",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                            "element",
                        ]}
                    ></MyTable>
                </div>
                <div class="col">
                    {/* <div style={"height: 100px; background-color: rgba(255,0,0,0.1);"}>
                        <div class="h-25 d-inline-block" style={"width: 120px; background-color: rgba(0,0,255,.1)"}>
                            Height 25%
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        // </PacketContext.Provider>
    )
}

export default App
