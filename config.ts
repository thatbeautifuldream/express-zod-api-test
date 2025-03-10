import { createConfig } from "express-zod-api";
import { apiReference } from "@scalar/express-api-reference";

const config = createConfig({
  beforeRouting: ({ app, getLogger }) => {
    const logger = getLogger();
    logger.info("Serving the API documentation at https://example.com/docs");
    app.use(
      "/docs",
      apiReference({
        spec: {
          // Put your OpenAPI url here:
          url: "https://gist.githubusercontent.com/thatbeautifuldream/a28bd9d9427da26a2a95cae5cc13a7c3/raw/4d5a4193daf9048869b753c2a6d8d418a13f2ecb/gistfile1.txt",
        },
      })
    );
  },
  http: {
    listen: 8090, // port, UNIX socket, or options
  },
  cors: true,
});

export { config };
