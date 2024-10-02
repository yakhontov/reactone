import { createContext } from "react"

const PacketContext = createContext({
    themes: {},
    theme: {},
    setTheme: () => {},
})

function LoadPacket() {
    console.log("btn")
    fetch("http://3.95.124.47/twiliosim/gprsconsole_test.class.php", {
        method: "POST",
        mode: "cors",
        headers: { "X-requested-with": "XMLHttpRequest" },
        //body: "loadtable=1&sim=21_81&limit=100&datefrom=2024-09-30+22%3A02%3A05&dateto=2024-10-02+06%3A02%3A05&usatimestamp=false&dontconvertpings=false",
    })
        .then((response) => console.log(response))
        .catch((e) => console.log(e))
}

// import { http } from "http"

// const options = {
//     method: "POST",
//     hostname: "3.95.124.47",
//     port: null,
//     path: "/twiliosim/gprsconsole_test.class.php",
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//     },
// }

// const req = http.request(options, function (res) {
//     const chunks = []

//     res.on("data", function (chunk) {
//         chunks.push(chunk)
//     })

//     res.on("end", function () {
//         const body = Buffer.concat(chunks)
//         console.log(body.toString())
//     })
// })

// function LoadPacket() {
//     req.write(
//         qs.stringify({
//             loadtable: "1",
//             sim: "21_84",
//             limit: "10",
//             datefrom: "2024-09-30+12%3A08%3A29",
//             dateto: "2024-09-30 13:58:55",
//         })
//     )
//     req.end()
// }

export { PacketContext, LoadPacket }
