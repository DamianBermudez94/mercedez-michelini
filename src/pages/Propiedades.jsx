import Navbar from "../components/NavBar";
import PropertyCard from "../components/PropertyCard";


export default function Propiedades({index,titulo,descripcion,imagen}) {
    return (
        <div>
            <Navbar />
            <section className="container mx-auto my-10 p-4">
                <h2 className="text-3xl font-bold text-center">Propiedades Disponibles</h2>
                <div className="flex gap-6 mt-6">
                    <PropertyCard key={index} title={titulo} descripcion={descripcion} imagen={imagen} />
                </div>
            </section>
        </div>
    );
}
