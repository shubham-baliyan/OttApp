let mode = "remoteserver";
let domain =
  mode === "local" ? "http://localhost:1337/" : "http://localhost:1337/";

let appConfig = {
  graphDomain: domain + "graphql",
};

export default appConfig;
