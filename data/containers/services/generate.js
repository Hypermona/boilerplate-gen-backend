const generateCompose = (name, client, server, db) => {
  const yaml = require("js-yaml");
  const fs = require("fs");

  const data = {
    version: "3",
    services: {},
    networks: { "full-app": { driver: "bridge" } },
    volumes: { "local-data": { driver: "local" } },
  };

  // Get document, or throw exception on error
  try {
    const a = yaml.load(fs.readFileSync(`${__dirname}/${client}.yml`, "utf8"));
    const b = yaml.load(fs.readFileSync(`${__dirname}/${server}.yml`, "utf8"));
    const c = yaml.load(fs.readFileSync(`${__dirname}/${db}.yml`, "utf8"));

    data.services = { client: a, server: b, database: c };

    fs.writeFile(`./data/${name}/docker-compose.yml`, yaml.dump(data), () => {});
  } catch (e) {
    console.log(e);
  }
};

module.exports = generateCompose;
