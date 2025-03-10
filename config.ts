import { createConfig } from "express-zod-api";

const config = createConfig({
  http: {
    listen: 8090, // port, UNIX socket, or options
  },
  cors: true,
});

export { config };
