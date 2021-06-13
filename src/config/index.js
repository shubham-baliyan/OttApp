let mode = "remoteserver";
let domain =
  mode === "local" ? "http://localhost:1337:" : "http://localhost:1337";

let appConfig = {
  domain,
};

export default appConfig;
