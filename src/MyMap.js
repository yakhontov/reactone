import { createContext, useContext, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import { Icon } from "leaflet"

//Define custom icons for different categories
const legalIcon = new Icon({
    iconUrl:
        "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png",
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})
const foodIcon = new Icon({
    iconUrl: "https://img.icons8.com/doodle/48/apple.png",
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})
const healthIcon = new Icon({
    iconUrl: "https://img.icons8.com/doodle/48/heart-with-pulse.png",
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})

const housingIcon = new Icon({
    iconUrl: "https://img.icons8.com/plasticine/100/exterior.png",
    iconSize: [38, 45], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})

var mapSetSelectedPacket = null

const outerBounds = [
    [51.0, 0.0],
    [51.1, 0.1],
]

//center={[29.794502, -95.370513]}
//bounds={outerBounds}
function MyMap(props) {
    const [selectedPacket, setSelectedPacket] = useState(null)
    //const [currentbounds, setSelectedPacket] = useState(null)
    mapSetSelectedPacket = setSelectedPacket
    // var bounds = { minlat: 180, maxlat: -180, minlon: 180, maxlon: -180 }
    // bounds = selectedPacket?.gnss
    //     ? selectedPacket.gnss.reduce((b, c) => {
    //           return {
    //               minlat: b.minlat < c.lat ? b.minlat : c.lat,
    //               maxlat: b.maxlat > c.lat ? b.minlat : c.lat,
    //               minlon: b.minlon < c.lon ? b.minlon : c.lon,
    //               maxlon: b.maxlon > c.lon ? b.minlon : c.lon,
    //           }
    //       }, bounds)
    //     : bounds
    const bounds = []
    selectedPacket?.gnss?.map((coord) => {
        bounds.push([coord.lat, coord.lon])
    })
    if (!bounds.length) bounds.push([51.0, 0.0])
    console.log(bounds)
    const bnd = []
    return (
        <MapContainer
            // bounds={[
            //     [bounds.minlat, bounds.minlon],
            //     [bounds.maxlat, bounds.maxlon],
            // ]}
            bounds={bounds}
            zoom={13}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedPacket?.gnss?.map((element, index) => {
                bnd.push([element.lat, element.lon])
                return <Marker key={index} position={[element.lat, element.lon]} icon={legalIcon} />
            })}
            {selectedPacket?.celllocate?.map((element, index) => {
                return <Marker key={index} position={[element.lat, element.lon]} />
            })}
            {selectedPacket?.nearestcells?.cells?.map((element, index) => {
                return element.opencellid?.lat && element.opencellid?.lon ? (
                    <Marker key={index} position={[element.opencellid.lat, element.opencellid.lon]} />
                ) : null
            })}
            {selectedPacket?.nearestcells?.unwiredlabs?.lat && selectedPacket?.nearestcells?.unwiredlabs?.lon ? (
                <Marker position={[selectedPacket.nearestcells.unwiredlabs.lat, selectedPacket.nearestcells.unwiredlabs.lon]} />
            ) : null}
            {/* <Marker position={[selectedPacket.nearestcells.unwiredlabs.lat, selectedPacket.nearestcells.unwiredlabs.lon]} /> */}
        </MapContainer>
    )
}

export { mapSetSelectedPacket, MyMap }
