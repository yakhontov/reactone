import { createContext, useContext, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

var mapSetSelectedPacket = null

function MyMap(props) {
    const [selectedPacket, setSelectedPacket] = useState(null)
    mapSetSelectedPacket = setSelectedPacket
    //console.log("map update", selectedPacket)
    return (
        <MapContainer center={[29.794502, -95.370513]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedPacket?.gnss?.map((element, index) => {
                return <Marker position={[element.lat, element.lon]} />
            })}
            {selectedPacket?.celllocate?.map((element, index) => {
                return <Marker position={[element.lat, element.lon]} />
            })}
            {selectedPacket?.nearestcells?.cells?.map((element, index) => {
                return element.opencellid?.lat && element.opencellid?.lon ? <Marker position={[element.opencellid.lat, element.opencellid.lon]} /> : null
            })}
            {selectedPacket?.nearestcells?.unwiredlabs?.lat && selectedPacket?.nearestcells?.unwiredlabs?.lon ? (
                <Marker position={[selectedPacket.nearestcells.unwiredlabs.lat, selectedPacket.nearestcells.unwiredlabs.lon]} />
            ) : null}
        </MapContainer>
    )
}

export { mapSetSelectedPacket, MyMap }
