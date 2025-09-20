// Array para almacenar los nombres de los amigos
let participantes = [];

// Función para agregar amigos
function agregarAmigo() {
  // 1️⃣ Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // trim() quita espacios al inicio y final

  // 2️⃣ Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // Sale de la función si no hay nombre
  }

  // 3️⃣ Actualizar el array de amigos
  participantes.push(nombre);

  // 4️⃣ Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista visible (lo hacemos en otra función)
  actualizarLista();
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
  // 1️⃣ Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // 2️⃣ Limpiar la lista existente
  lista.innerHTML = "";

  // 3️⃣ Iterar sobre el arreglo usando un bucle for
  for (let i = 0; i < participantes.length; i++) {
    // 4️⃣ Crear un elemento <li> para cada amigo
    const li = document.createElement("li");
    li.textContent = participantes[i];

    // 5️⃣ Agregar el <li> a la lista
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  // 1️⃣ Validar que haya amigos en el array
  if (participantes.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega al menos uno.");
    return;
  }

  // 2️⃣ Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * participantes.length);

  // 3️⃣ Obtener el nombre sorteado
  const amigoSorteado = participantes[indiceAleatorio];

  // 4️⃣ Mostrar el resultado en la página
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

