

//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
  
export const clientServices = {
  listaClientes,
}
