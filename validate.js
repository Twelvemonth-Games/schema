const Ajv = require("ajv");
const loadJsonFile = require("load-json-file");
const ajv = new Ajv();

const schema = loadJsonFile.sync("schema.json");
const data = loadJsonFile.sync("example.json");

const valid = ajv.validate(schema, data);
if (valid) {
  console.log("ok");
} else {
  console.error(ajv.errors);
}
