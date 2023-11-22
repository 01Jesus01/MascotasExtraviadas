function confirmarEliminar() {
    // Mostrar un cuadro de confirmación
    var confirmacion = window.confirm("¿Estás seguro de que quieres dar de baja a tu mascota?");

    // Si el usuario hace clic en "Aceptar" en el cuadro de confirmación
    if (confirmacion) {
        // Aquí puedes poner el código para eliminar la mascota o realizar la acción deseada
        alert("Mascota eliminada exitosamente"); // Esto es solo un ejemplo, reemplázalo con tu lógica real
    } else {
        // El usuario hizo clic en "Cancelar" en el cuadro de confirmación
        alert("Operación cancelada");
    }
}