
/*
Eventos de ratón:

- mousedown: Cuando se presiona un botón del ratón sobre un elemento.
- mousemove: Cuando el ratón se mueve mientras está sobre un elemento.
- mouseup: Cuando se suelta un botón del ratón que estaba presionado.

    Propiedades de eventos de ratón:

    - event.clientX / event.clientY: Coordenadas del puntero del ratón en relación con la ventana del navegador.
    - event.pageX / event.pageY: Coordenadas del puntero del ratón en relación con el documento completo.


Eventos Táctiles (Touch):
- touchstart: Cuando se toca la pantalla.
- touchmove: Cuando se mueve el dedo sobre la pantalla.
- touchend: Cuando se levanta el dedo de la pantalla.

    Propiedades de eventos de táctiles:

    - event.touches: Lista de todos los puntos de contacto activos en la pantalla. (las lista se refiere a los puntos de contacto activos en la pantalla, a los dedos que tocan la pantalla)
    - targetTouches: Devuelve una lista de todos los puntos de contacto activos 
    que están en el elemento sobre el que se ha desencadenado el evento.
    - changedTouches: Devuelve una lista de todos los puntos de contacto cuyo estado ha cambiado en relación con el evento. 
    Esto puede incluir puntos de contacto que se han agregado o eliminado desde la última vez que se disparó 
    un evento táctil.

Eventos de teclado:
- keydown: Al presionar una tecla.
- keypress: Después de presionar una tecla (solo para teclas con caracteres imprimibles).
- keyup: Al soltar una tecla.

    Propiedades de eventos de teclado:

    - event.key: La tecla presionada durante el evento de teclado.


OTRAS PROPIEDADES DE EVENTOS:

event.type: Tipo de evento que ha ocurrido (por ejemplo, "click", "mousemove", "keydown").
event.target: Elemento en el que se originó el evento.
event.preventDefault(): Previene el comportamiento predeterminado del evento.
event.stopPropagation(): Detiene la propagación del evento a través de los elementos del DOM.

*/