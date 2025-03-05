import { useEffect, useState } from "react";
import { getProperties } from "../utils/Contenfull";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PropertiesPage() {
    const [properties, setProperties] = useState([]);
    console.log("soy la data", properties);

    useEffect(() => {
        getProperties().then(setProperties);
    }, []);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Propiedades</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
                {properties.map((prop, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        {prop.imagen?.length > 0 ? (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                className="w-full h-48"
                            >
                                {prop.imagen.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={`https:${img}`}
                                            alt={`Imagen ${index + 1} - ${prop.titulo}`}
                                            className="w-full h-48 object-cover rounded-md"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <p className="text-gray-500">No hay imágenes disponibles</p>
                        )}
                        <h3 className="text-xl font-semibold mt-2">{prop.titulo}</h3>
                        <p className="text-gray-600">${prop.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

