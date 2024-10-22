import { createContext } from "react"
import { TestData } from "./TestData"

// const PacketContext = createContext({
//     themes: {},
//     theme: {},
//     setTheme: () => {},
// })

// function getGnssCount(packet) {
//     const coordsArray = coordStrToArray(packet.c)
//     const count = coordsArray.length
//     const coords = coordsArray.reduce((counter, element) => counter + (element.isCelllocate ? 0 : 1), 0) || 0
//     return `${coords}/${count}`
// }

// function getGnssCelllocateCount(packet) {
//     const coordsArray = coordStrToArray(packet.c)
//     const count = coordsArray.length
//     const coords = coordsArray.reduce((counter, element) => counter + (element.isCelllocate ? 1 : 0), 0) || 0
//     return `${coords}/${count}`
// }

// function getOpencellidCount(packet) {
//     const count = packet.nearestcells?.cells?.length || 0
//     const coords = packet.nearestcells?.cells?.reduce((counter, element) => counter + (element.opencellid?.lat && element.opencellid?.lon ? 1 : 0), 0) || 0
//     return `${coords}/${count}`
// }

// function getUnwiredlabsCount(packet) {
//     const count = packet.nearestcells?.unwiredlabs ? 1 : 0
//     const coords = packet.nearestcells?.unwiredlabs?.lat && packet.nearestcells?.unwiredlabs?.lon ? 1 : 0
//     return `${coords}/${count}`
// }

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

const PacketContext = createContext("12345")

function LoadPackets() {
    const packets = TestData
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

    // PacketContext.str = "Changed"
    // console.log(PacketContext)
    // console.log("btn")
    // fetch("http://3.95.124.47/twiliosim/gprsconsole_test.class.php", {
    //     method: "POST",
    //     mode: "cors",
    //     headers: { "X-requested-with": "XMLHttpRequest" },
    //     //body: "loadtable=1&sim=21_81&limit=100&datefrom=2024-09-30+22%3A02%3A05&dateto=2024-10-02+06%3A02%3A05&usatimestamp=false&dontconvertpings=false",
    // })
    //     .then((response) => console.log(response))
    //     .catch((e) => console.log(e))
}

export { PacketContext, LoadPackets }
