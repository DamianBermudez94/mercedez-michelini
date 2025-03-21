import { useEffect, useState } from "react";
import { getProperties } from "../utils/Contenfull";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { initSwiper } from "../utils/swiper-config.js";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PropertiesPage() {
    const [properties, setProperties] = useState([]);
    console.log("soy la data", properties);

    useEffect(() => {
        getProperties().then(setProperties);
    }, []);

    setTimeout(() => {
        initSwiper();
    }, 0);

    return (
        <article className="w-full xl:w-[1300px] m-auto p-4">
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {properties.map((prop, index) => (
                    <div key={index} className="bg-Background-propiedades-destacada rounded-xl shadow-md overflow-hidden">
                        {prop.imagen?.length > 0 ? (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: ".custom-swiper-next",
                                    prevEl: ".custom-swiper-prev",
                                }}
                                pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
                                className="w-full h-[300px]"
                            >
                                {prop.imagen.map((img, index) => (
                                    <SwiperSlide key={index}>

                                        <img
                                            src={`https:${img}`}
                                            alt={`Imagen ${index + 1} - ${prop.titulo}`}
                                            className="w-full h-[300px] object-cover"
                                        />


                                    </SwiperSlide>
                                ))}
                                <div className="custom-swiper-prev"><ChevronLeft className="text-red-900 hover:text-white w-10 h-10" /></div>
                                <div className="custom-swiper-next"><ChevronRight className="text-red-900 hover:text-white  transition-all w-10 h-10" /></div>
                                <div className="custom-swiper-pagination">hola</div>
                            </Swiper>
                        ) : (
                            <p className="text-gray-500">No hay imágenes disponibles</p>
                        )}
                        <div className="p-3 flex flex-col items-center h-auto overflow-hidden">
                            <h3 className="text-xl font-semibold mt-2 text-center text-Title-card">{prop.titulo}</h3>
                            <p className="text-Text-card font-medium text-center mt-3">${prop.descripcion}</p>
                            <a href="/contacto" className="bg-featured-properties-bg text-nav-bg p-2 rounded border border-nav-bg hover:text-text-color hover:bg-nav-bg hover:border-card-bg transition-all duration-200 ease-out">Ver propiedad</a>
                        </div>

                    </div>
                ))}
            </div>
        </article>
    );
}

