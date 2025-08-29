// importar todo lo de la libreria "express"
import express from "express"
// importar todo lo de la libreria "cors"
import cors from "cors"
// importar la constante que contiene el router
import usersRoutes from "./src/routes/users.js"

const app = express()

app.use(express.json())

// middleware para usar cors en el Frontend (cambiar según la IP inalámbrica de Ethernet)
app.use(cors({origin: ["http://10.112.143.153:8081", "exp://10.112.143.153:8081"], credentials: true, methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"]}))
// monta las rutas de usuarios en la aplicacion
app.use("/api/users", usersRoutes)

export default app