
/*
PROPIEDADES PARA OBTENER EL POSICIONAMIENTO DE ELEMENTOS EN UNA PANTALLA:
offsetTop y offsetLeft: Estas propiedades devuelven la distancia del borde superior e izquierdo del elemento padre más cercano. Si no hay ningún elemento padre con posición relativa, devolverán las distancias con respecto al borde superior e izquierdo del documento.
offsetWidth y offsetHeight: Estas propiedades devuelven el ancho y la altura del elemento, incluyendo el ancho del borde y el padding, pero sin incluir el margen.
scrollLeft y scrollTop: Estas propiedades devuelven la cantidad de desplazamiento horizontal y vertical del contenido del elemento en relación con su tamaño visible.
clientWidth y clientHeight: Estas propiedades devuelven el ancho y la altura del área de contenido visible de un elemento, incluyendo el padding pero sin incluir el borde, la barra de desplazamiento o el margen.
getComputedStyle(): Esta función devuelve un objeto que contiene los estilos computados de un elemento, incluyendo su posición, tamaño, margen, relleno, etc.
getClientRects(): Esta función devuelve una lista de objetos ClientRect que representan el área de contenido rectangular de un elemento en relación con la ventana de visualización.


- getBoundingClientRect(): Devuelve un objeto DOMRect que proporciona información sobre la posición y el tamaño de un elemento en relación con la ventana de visualización.
const rect = elemento.getBoundingClientRect();
const top = rect.top;
const bottom = rect.bottom;
offsetTop y offsetLeft: Devuelve la distancia del borde superior e izquierdo del elemento padre más cercano.

const topOffset = elemento.offsetTop;
const leftOffset = elemento.offsetLeft;
offsetWidth y offsetHeight: Devuelve el ancho y la altura del elemento, incluyendo el ancho del borde y el padding, pero sin incluir el margen.

const width = elemento.offsetWidth;
const height = elemento.offsetHeight;
scrollLeft y scrollTop: Devuelve la cantidad de desplazamiento horizontal y vertical del contenido del elemento en relación con su tamaño visible.

const scrollLeft = elemento.scrollLeft;
const scrollTop = elemento.scrollTop;
clientWidth y clientHeight: Devuelve el ancho y la altura del área de contenido visible de un elemento, incluyendo el padding pero sin incluir el borde, la barra de desplazamiento o el margen.

const clientWidth = elemento.clientWidth;
const clientHeight = elemento.clientHeight;
getComputedStyle(): Devuelve un objeto que contiene los estilos computados de un elemento, incluyendo su posición, tamaño, margen, relleno, etc.

const styles = getComputedStyle(elemento);
const position = styles.position;
getClientRects(): Devuelve una lista de objetos ClientRect que representan el área de contenido rectangular de un elemento en relación con la ventana de visualización.

const rects = elemento.getClientRects();
const firstRect = rects[0];
const rectTop = firstRect.top;
const rectBottom = firstRect.bottom;


*/