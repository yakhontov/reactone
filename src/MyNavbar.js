import React, { useContext } from "react"
import Table from "react-bootstrap/Table"
import "./App.css"

import "react-datetime/css/react-datetime.css"
import Datetime from "react-datetime"

import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import DropdownItemText from "react-bootstrap/DropdownItemText"
import { LoadPackets } from "./PacketContext"
import { PacketsContext, LoadPacket, Packets } from "./PacketContext"

//import DropDownText from "react-bootstrap-text-dropdown"

async function OnUpdateBtnClick(setCurrentPackets) {
    setCurrentPackets(
        await LoadPackets({
            devicename: "21_73",
            limit: "50",
        })
    )
}

function MyNavbar() {
    const { currentPackets, setCurrentPackets } = useContext(PacketsContext)
    return (
        // <div className="sticky-top ">
        <div>
            <Navbar className="bg-body-tertiary justify-content-between">
                <Form>
                    <InputGroup>
                        <InputGroup.Text>Device:</InputGroup.Text>
                        <Form.Control style={{ width: 100 }} defaultValue="21_" />
                    </InputGroup>
                </Form>
                <Form>
                    <InputGroup>
                        <InputGroup.Text>From:</InputGroup.Text>
                        <Datetime style={{ width: 200 }} initialValue={new Date().setHours(0, 0, 0, 0) - 86400000} />
                        <InputGroup.Text>to:</InputGroup.Text>
                        <Datetime style={{ width: 200 }} initialValue={new Date().setHours(23, 59, 59, 998)} />
                    </InputGroup>
                </Form>
                <Form>
                    <InputGroup>
                        <InputGroup.Text>Limit:</InputGroup.Text>
                        <Form.Control style={{ width: 100 }} defaultValue={"100"} />
                    </InputGroup>
                </Form>
                <Form>
                    <Button
                        variant="primary"
                        onClick={() => {
                            OnUpdateBtnClick(setCurrentPackets)
                        }}
                    >
                        Update
                    </Button>
                </Form>
            </Navbar>
            {/* <Form style={{ flex: 1 }}>
                    <InputGroup>
                        <InputGroup.Text>Command:</InputGroup.Text>
                        <Form.Control
                            width="500px"
                            style={{ minWidth: "100px" }}
                            defaultValue="devdev,"
                        />
                        <Button variant="secondary">Send</Button>
                    </InputGroup>
                </Form> */}
        </div>
    )
}

export default MyNavbar
