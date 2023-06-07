const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-Type": "text/plain"})
  res.end("Hello xiaomi")
})

server.listen(port, () =>{
  console.log(`Servidor rodando na porta: http://localhost:${port}`)
})