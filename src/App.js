import Button from "react-bootstrap/Button"
import MyTable from "./MyTable"
import { PacketContext, LoadPacket } from "./PacketContext"

function App() {
    console.log("")
    return (
        <PacketContext.Provider value={PacketContext}>
            <div className="App">
                <Button onClick={LoadPacket}>321</Button>

                <MyTable
                    packets={[
                        "elment0",
                        "elemrnt1sdfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
                    ]}
                ></MyTable>
            </div>
        </PacketContext.Provider>
    )
}

export default App
