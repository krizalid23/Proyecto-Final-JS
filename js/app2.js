// Objeto

function juegos(id, genero, titulo, plataforma, precio, foto) {
    this.id = id,
      this.genero = genero,
      this.titulo = titulo,
      this.plataforma = plataforma,
      this.precio = precio,
      this.foto = foto
    this.descripcion = function () {
      return `El juego ${this.titulo} de ${this.genero} vale ${this.precio} pesos.`
    }
  }

// Cargo los datos en el array

const arrayJuegos = [];

const juego1 = new juegos(1, "Lucha", "Mortal Kombat 11", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 1199, "mortal.jpg");
const juego2 = new juegos(5, "Estrategia", "Age of Empires 2", "pc", 230, "age.jpg");
const juego3 = new juegos(13, "Carreras", "Forza 4", ["pc", "xbox"], 2890, "forza.jpg");
const juego4 = new juegos(29, "Rpg", "Horizon Zero Down", ["ps4", "ps5", "pc"], 2100, "horizon.jpg");
const juego5 = new juegos(3, "Deportes", "Fifa 21", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 3500, "fifa21.png");
const juego6 = new juegos(7, "Sigilo", "Metal Gear Solid 5", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 890, "metal.jpg");
const juego7 = new juegos(16, "Acción", "Residen Evil Village", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 3500, "Resident.jpg");
const juego8 = new juegos(19, "Aventura", "A.C Valhalla", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 3300, "assassins.jpg");
const juego9 = new juegos(8, "Plataforma", "Little Nightmares", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 1300, "little.jpg");
const juego10 = new juegos(25, "Simulador", "Los Sims 4", ["ps4", "ps5", "pc", "xbox"], 990, "sims4.png");
const juego11 = new juegos(21, "Indie", "Minecraft", ["ps4", "ps5", "pc", "xbox", "nSwitch"], 1200, "minecraft.jpg");
const juego12 = new juegos(17, "Free", "Fortnite", ["ps4", "ps5", "pc", "xbox", "nSwitch"], "Free", "fortnite.jpg");
const juego13 = new juegos(31, "Shooter", "Doom Eternal", ["ps4", "ps5", "pc", "xbox"], "2899", "doom.png");
const juego14 = new juegos(28, "Aventura", "Spiderman", ["ps4", "ps5"], "2390", "spiderman.jpg");
const juego15 = new juegos(30, "Plataforma", "Mario Bros Deluxe", ["nSwitch"], "1790", "mario.jpg");
const juego16 = new juegos(6, "Shooter", "Halo Infinite", ["pc", "xbox"], "2790", "halo.png");
const juego17 = new juegos(14, "Lucha", "Smash Bros Ultimate", ["nSwitch"], "3290", "smash.png");
const juego18 = new juegos(22, "Carreras", "Mario Kart 8", ["nSwitch"], "2099", "kart.jpg");
const juego19 = new juegos(20, "Acción", "Gears of War 5", ["pc", "xbox"], "2400", "gears.jpg");
const juego20 = new juegos(12, "Acción", "God of War 4", ["ps4", "ps5"], "2690", "god.jpg");
const juego21 = new juegos(9, "Aventura", "Pokémon Let´s Go Pikachu", ["nSwitch"], "1890", "pokemon.jpg");
const juego22 = new juegos(24, "Rol", "Diablo III", ["ps4", "ps5", "pc", "xbox", "nSwitch"], "1200", "diablo.jpg");
const juego23 = new juegos(35, "Deportes", "NBA 2k21", ["ps4", "ps5", "pc", "xbox", "nSwitch"], "4100", "nba.jpg");
const juego24 = new juegos(2, "Acción", "The Last of Us 2", ["ps4", "ps5"], "3690", "last.jpg");

arrayJuegos.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12, juego13, juego14, juego15, juego16, juego17, juego18, juego19, juego20, juego21, juego22, juego23, juego24);

// Recorro para insertarlos en el HTML

$(document).ready(function() {
    for (juego of arrayJuegos) {
        $("div#myArrayJuegos").append(`<div class="items">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="item shadow mb-4">
                    <h3 class="item-title">${juego.titulo}</h3>
                    <img class="item-image img-fluid" src="./multimedia/${juego.foto}">

                    <div class="item-details">
                        <h4 class="item-price">${'$' + juego.precio}</h4>
                        <button class="item-button btn btn-danger addToCart" onClick='agregarJuego("${juego.id}","${juego.titulo}","${juego.foto}","${juego.precio}")'>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>`)
        }
});

// Modo Oscuro

$(document).ready(function() {
    if (localStorage.getItem("mode") == "dark-theme") {
      $("body").addClass("dark-theme");
      $('switch').toggleClass('active');
    } else if (localStorage.getItem("mode") == "light-theme") {
      $("body").removeClass("dark-theme");
      $('switch').removeClass('active');
    }
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (localStorage.getItem("mode") == "light-theme") {
      $("body").removeClass("dark-theme");
      
    } else if (mq.matches) {
      $("body").addClass("dark-theme");
    }
  });
  
  $("#switch").on("click", function() {
    if ($("body").hasClass("dark-theme")) {
      $("body").removeClass("dark-theme");
      localStorage.setItem("mode", "light-theme");
    } else {
      $("body").addClass("dark-theme");
      localStorage.setItem("mode", "dark-theme");
    }
  });

  const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
  
  );

  // Manejo del carrito

 function agregarJuego(pID, pTitulo, pFoto, pPrecio) {

  $("div#ventaRealizada").empty();

  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  const button = event.target;
  const item = button.closest('.item');
  const itemTitle = item.querySelector('.item-title').textContent;

  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;

      calcularTotal();
      return;
    }
  }

  $("div#carrito").append(`
  <div class="row shoppingCartItem" id="${pID}">

        <div class="identificador">
            <input type="hidden" name="${pID}" value="${pID}"></input> 
        </div>

        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src="./multimedia/${pFoto}" class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${pTitulo}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${pPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1" onClick="calcularTotal()">
                <button class="btn btn-danger buttonDelete" onClick="eliminarJuego(${pID})" type="button">X</button>
            </div>
        </div>
    </div>`);
    calcularTotal();
}

function eliminarJuego(pID) {
  $("div#"+pID).remove();
  calcularTotal()
}

function comprarJuegos() {

var total = $('div#total').text().replace('$','');

if(total != 0){
  $("div#ventaRealizada").append(`<div class="modal-body">
  <p class="venta">La reservas duran 48hs. Te enviamos la factura por mail, recordá que la necesitas para abonar tus juegos en el local.</p> 
  <p class="venta"> Muchas gracias por elegirnos!</p>
</div>`);   
} else {
  $("div#ventaRealizada").empty();
}

$("div#carrito").empty();
calcularTotal()
}

function calcularTotal() {
let total = 0;
const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

shoppingCartItems.forEach((shoppingCartItem) => {
  const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
    '.shoppingCartItemPrice'
  );
  const shoppingCartItemPrice = Number(
    shoppingCartItemPriceElement.textContent.replace('$', '')
  );
  const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
    '.shoppingCartItemQuantity'
  );
  const shoppingCartItemQuantity = Number(
    shoppingCartItemQuantityElement.value
  );
  total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
});

$('div#total').empty();
$('div#total').append(total.toFixed(2));
}

// Animación Mostrar la tabla de Usuario Logueado
var flip = 3;
$("#pat").click(function () {
  $(".my-5").toggle(flip++ % 2 === 1);
});

// Ajax - JSON
var contenido = document.querySelector('#contenido')

function traer() {
  fetch('datos.json')
    .then(res => res.json())
    .then(datos => {
      tabla(datos)
    })
}

function tabla(datos) {
  contenido.innerHTML = ''
  for (let valor of datos) {
    contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.dni }</td>
            <td>${ valor.nombre }</td>
            <td>${ valor.apellido }</td>
            <td>${ valor.usuario }</td>
            <td>${ valor.email }</td>
            <td>${ valor.estado ? "Activo" : "Inactivo" }</td>
        </tr>
        
        `
  }
}

// Botón Redes sociales
$(".redes").click();