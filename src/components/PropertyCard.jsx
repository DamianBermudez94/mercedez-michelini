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
        <article className="w-full xl:w-[1300px] m-auto p-4">
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {properties.map((prop, index) => (
                    <div key={index} className="bg-Background-propiedades-destacada border border-Color-borde shadow-xs rounded-t-md overflow-hidden">
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
                                            className="w-full h-[300px] m-auto object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <p className="text-gray-500">No hay imágenes disponibles</p>
                        )}
                        <div className="p-3">
                            <h3 className="text-xl font-semibold mt-2 text-center text-Title-card">{prop.titulo}</h3>
                            <p className="text-Text-card font-medium text-center">${prop.descripcion}</p>
                        </div>

                    </div>
                ))}
            </div>
        </article>
    );
}

