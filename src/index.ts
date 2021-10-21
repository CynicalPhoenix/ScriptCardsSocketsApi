import net from "net";

import Timer from "./Utils/Timer";

let timer = new Timer();

const server = net.createServer((socket) => {
    timer.executeAfter(5).then(() => {
        console.log(`${socket.remoteAddress} se ha connectado`);
        socket.write(Buffer.from("connected", "utf-8"));
    });

    socket.on("close", () => {
        console.log("disconnected");
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Running in the port ' + PORT)
})