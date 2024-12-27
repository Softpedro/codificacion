import { server } from "./mocks/server";

console.log("Starting Mock API Server...");

// Inicia el servidor en Node.js
server.listen({ onUnhandledRequest: "warn" });

console.log("Mock API Server is running!");
