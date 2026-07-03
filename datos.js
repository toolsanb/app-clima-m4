// Arreglo de objetos con el modelo de datos completo
const lugares = [
  {
    id: 1,
    nombre: "Playa del Viento",
    tempActual: 22,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 23, estado: "Nublado" },
      { dia: "Miércoles", min: 19, max: 26, estado: "Soleado" },
      { dia: "Jueves", min: 16, max: 22, estado: "Lluvioso" },
      { dia: "Viernes", min: 18, max: 25, estado: "Soleado" },
      { dia: "Sábado", min: 20, max: 27, estado: "Soleado" },
      { dia: "Domingo", min: 17, max: 23, estado: "Nublado" }
    ]
  },
  {
    id: 2,
    nombre: "Valle de las Nubes",
    tempActual: 14,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 11, max: 16, estado: "Nublado" },
      { dia: "Martes", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Miércoles", min: 12, max: 17, estado: "Nublado" },
      { dia: "Jueves", min: 9, max: 14, estado: "Lluvioso" },
      { dia: "Viernes", min: 11, max: 16, estado: "Nublado" },
      { dia: "Sábado", min: 13, max: 18, estado: "Soleado" },
      { dia: "Domingo", min: 12, max: 17, estado: "Nublado" }
    ]
  },
  {
    id: 3,
    nombre: "Cumbre Nevada",
    tempActual: -2,
    estadoActual: "Nevando",
    pronosticoSemanal: [
      { dia: "Lunes", min: -5, max: 1, estado: "Nevando" },
      { dia: "Martes", min: -6, max: 0, estado: "Nevando" },
      { dia: "Miércoles", min: -4, max: 2, estado: "Nublado" },
      { dia: "Jueves", min: -3, max: 3, estado: "Soleado" },
      { dia: "Viernes", min: -5, max: 1, estado: "Nevando" },
      { dia: "Sábado", min: -4, max: 2, estado: "Nublado" },
      { dia: "Domingo", min: -6, max: -1, estado: "Nevando" }
    ]
  },
  {
    id: 4,
    nombre: "Sendero Verde",
    tempActual: 19,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 22, estado: "Soleado" },
      { dia: "Martes", min: 14, max: 21, estado: "Nublado" },
      { dia: "Miércoles", min: 16, max: 23, estado: "Soleado" },
      { dia: "Jueves", min: 15, max: 20, estado: "Nublado" },
      { dia: "Viernes", min: 13, max: 19, estado: "Lluvioso" },
      { dia: "Sábado", min: 16, max: 24, estado: "Soleado" },
      { dia: "Domingo", min: 17, max: 25, estado: "Soleado" }
    ]
  },
  {
    id: 5,
    nombre: "Oasis Seco",
    tempActual: 31,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 24, max: 35, estado: "Soleado" },
      { dia: "Martes", min: 23, max: 34, estado: "Soleado" },
      { dia: "Miércoles", min: 25, max: 36, estado: "Soleado" },
      { dia: "Jueves", min: 22, max: 32, estado: "Nublado" },
      { dia: "Viernes", min: 24, max: 35, estado: "Soleado" },
      { dia: "Sábado", min: 26, max: 37, estado: "Soleado" },
      { dia: "Domingo", min: 25, max: 36, estado: "Soleado" }
    ]
  }
];