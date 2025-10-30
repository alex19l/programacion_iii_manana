try {
    console.log(variableNoDeclarada);
} catch (error) {
    console.error("Se produjo un error:", error.message);
}  

try {
    console.log("Intentando abreir archivo...");
    throw new Error("Archivo no escontrado.");
} catch (error) {
    console.log("Error al abrir el archivo:", error.message);
} finally {
    console.log("***** Operación de archivo finalizada *****");
}