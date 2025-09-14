interface Config {
  baseURL: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseURL: "https://tgaf-backup-backend.vercel.app",
      };
      break;
    case "local":
      config = {
        baseURL: "http://localhost:8000",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "production"; // Change to 'local' for local development
export const config = checkConfig(selectServer) as Config;
