import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";


export default function Propiedades({ index, titulo, descripcion, imagen }) {
    return (
        <section className="container h-full mx-auto p-10">
            <h2 className="text-4xl font-bold text-center">Casas, departamentos y terrenos en venta y alquiler</h2>
            <div className="flex gap-6 mt-6">
                <PropertyCard key={index} title={titulo} descripcion={descripcion} imagen={imagen} />
            </div>
        </section>
    );
}
