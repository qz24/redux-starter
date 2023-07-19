import prodConfig from "./prod.json";
import devConfig from "./prod.json";

let config: typeof prodConfig | typeof devConfig;

config = prodConfig;

export default config;
