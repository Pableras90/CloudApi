import { House,Review,Amenity } from "./house/house.model.js";

export interface DB{
    houses:House[];
}

export const db:DB={
    houses:[
        {
            id: 1,
            description: "Casa Rural Malaga",
            address: "Calle Primavera, 123, Malaga",
            amenities: {
              Habitaciones: 3,
              camas: 6,
              baños: 2,
            },
            reviews: [
              {
                reviewerName: "Carlos",
                content: "Excelente lugar para descansar y disfrutar de la naturaleza.",
                rating: 5,
              },
              {
                reviewerName: "Ana",
                content:
                  "Muy acogedora y bien equipada, perfecta para unas vacaciones en familia.",
                rating: 4,
              },
            ],
          },
          {
            id: 2,
            description: "Casa Rural Tomelloso",
            address: "Avenida del Sol, 456, Tomelloso",
            amenities: {
              Habitaciones: 4,
              camas: 8,
              baños: 3,
            },
            reviews: [
              {
                reviewerName: "Luis",
                content:
                  "Increíble estancia, todo muy limpio y en perfectas condiciones.",
                rating: 5,
              },
              {
                reviewerName: "Elena",
                content: "Buena ubicación y atención por parte del anfitrión.",
                rating: 4,
              },
            ],
          },
          {
            id: 3,
            description: "Casa de campo Jaen",
            address: "Calle del Olivo, 789, Jaen",
            amenities: {
              Habitaciones: 2,
              camas: 4,
              baños: 1,
            },
            reviews: [
              {
                reviewerName: "Pablo",
                content: "Un lugar tranquilo y con hermosas vistas.",
                rating: 4,
              },
              {
                reviewerName: "Maria",
                content: "Ideal para desconectar del bullicio de la ciudad.",
                rating: 5,
              },
            ],
          },
          {
            id: 4,
            description: "Casa con piscina",
            address: "Calle del Lago, 101, Ciudad del Agua",
            amenities: {
              Habitaciones: 5,
              camas: 10,
              baños: 4,
            },
            reviews: [
              {
                reviewerName: "Fernando",
                content: "La piscina es genial, pasamos unos días muy agradables.",
                rating: 4,
              },
              {
                reviewerName: "Laura",
                content:
                  "Gran lugar para ir en grupo, tiene todo lo necesario para pasarla bien.",
                rating: 5,
              },
            ],
          },
          {
            id: 5,
            description: "Apartamento con jardin",
            address: "Calle de la Luna, 222, Pueblo Tranquilo",
            amenities: {
              Habitaciones: 1,
              camas: 2,
              baños: 1,
            },
            reviews: [
              {
                reviewerName: "Isabel",
                content:
                  "Pequeño pero muy acogedor, perfecto para una escapada en pareja.",
                rating: 4,
              },
              {
                reviewerName: "Andrés",
                content: "El jardín es encantador, disfrutamos mucho nuestra estancia.",
                rating: 5,
              },
            ],
          },
          {
            id: 6,
            description: "Duplex en pleno centro",
            address: "Avenida Central, 333, Ciudad Central",
            amenities: {
              Habitaciones: 3,
              camas: 6,
              baños: 2,
            },
            reviews: [
              {
                reviewerName: "Marta",
                content: "La ubicación es inmejorable, cerca de todo.",
                rating: 5,
              },
              {
                reviewerName: "Pedro",
                content: "El dúplex es espacioso y cómodo, lo recomiendo.",
                rating: 4,
              },
            ],
          }
    ]
}