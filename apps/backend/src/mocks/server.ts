import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Configura el servidor de pruebas
export const server = setupServer(...handlers);
