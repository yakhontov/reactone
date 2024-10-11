import { createContext } from "react"

// const PacketContext = createContext({
//     themes: {},
//     theme: {},
//     setTheme: () => {},
// })

const PacketContext = createContext("12345")

function LoadPacket() {
    PacketContext.str = "Changed"
    console.log(PacketContext)
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

export { PacketContext, LoadPacket }
