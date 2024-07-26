const { execFile } = require('child_process');

const rutaExe = "C:\\Program Files\\Microsoft VS Code\\Code.exe";

execFile(rutaExe, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al iniciar el archivo .exe: ${error.message}`);
    return;
  }
  console.log("Programa de firma digital iniciado exitosamente.");
});