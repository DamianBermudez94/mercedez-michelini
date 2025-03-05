export default function Navbar() {
    return (
        <nav className="bg-Background-color-nav text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Inmobiliaria XYZ</h1>
                <ul className="flex space-x-6">
                    <li><a href="/home" className="hover:underline">Inicio</a></li>
                    <li><a href="/propiedades" className="hover:underline">Propiedades</a></li>
                    <li><a href="/contacto" className="hover:underline">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}
