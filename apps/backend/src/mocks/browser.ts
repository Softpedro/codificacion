import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// Configuración del worker
export const worker = setupWorker(...handlers);
