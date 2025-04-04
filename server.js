const { exec } = require("child_process");

exec("node-red -v", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error iniciando Node-RED: ${err}`);
    return;
  }
  console.log(stdout);
});
