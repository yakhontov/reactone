import { createContext, useContext, useState } from "react"
import axios from "axios"
import { TestData } from "./TestData"

const PacketsContext = createContext(null)

function coordStrToArray(coordStr) {
    if (!coordStr) return { celllocate: [], gnss: [] }
    const gnss = []
    const celllocate = []
    coordStr.split("|").forEach((coordParamsStr) => {
        const coordParamsParts = coordParamsStr.split(",")
        if (coordParamsParts.length >= 5) {
            try {
                // a29.783852,-94.625417,18:31:28_10.21.24,72308,4.16,2
                const c = {
                    lat: parseFloat(coordParamsParts[0].startsWith("a") ? coordParamsParts[0].substring(1) : coordParamsParts[0]),
                    lon: parseFloat(coordParamsParts[1]),
                    datetime: coordParamsParts[2],
                    accuracy: parseInt(coordParamsParts[3]),
                    charge: parseFloat(coordParamsParts[4]),
                }
                if (coordParamsParts[0].startsWith("a")) celllocate.push(c)
                else gnss.push(c)
            } catch (error) {
                console.error(error)
            }
        }
    })
    return { celllocate, gnss }
}

async function LoadPackets(request) {
    try {
        const response = await axios.request({
            method: "PUT",
            url: "http://localhost:80",
            headers: { "Content-Type": "application/json" },
            data: request,
        })
        const packets = response.data
        for (const packet of packets) {
            const { celllocate, gnss } = coordStrToArray(packet.c)
            packet.celllocate = celllocate
            packet.gnss = gnss
            packet.nearestcellscount = packet.nearestcells?.cells?.length || 0
            packet.nearestcellscoords =
                packet.nearestcells?.cells?.reduce((counter, element) => counter + (element.opencellid?.lat && element.opencellid?.lon ? 1 : 0), 0) || 0
            packet.unwiredlabscoords = packet.nearestcells?.unwiredlabs?.lat && packet.nearestcells?.unwiredlabs?.lon ? 1 : 0
        }
        return packets
    } catch (error) {
        console.error(error.message)
    }
    return []
}

export { PacketsContext, LoadPackets }
