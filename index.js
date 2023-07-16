const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 250,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
//ejercicio 1
console.log("Las pizzas con id impar son:")
pizzas.forEach((pizzas) => {
  if(pizzas.id %2 !=0)
  {
    console.log(pizzas.nombre);
  }
})
console.log("---------")
//ejercicio 2
pizzas.forEach((pizzas) =>{
  if(pizzas.precio<600){
    console.log("La pizza" + pizzas.nombre + " vale menos de $600");
  }
})
console.log("---------")
//ejercicio 3
console.log("Pizzas");
pizzas.forEach((pizzas) =>{
  console.log(pizzas.nombre + "    " + pizzas.precio);
})
console.log("---------")
//ejercicio 4
pizzas.forEach((pizzas) => {
  console.log("La " + pizzas.nombre+ " tiene:");
  pizzas.ingredientes.forEach((ingredientes) =>{
    console.log(ingredientes)
  })
})