export default function LuchoWebLanding() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6 font-sans">
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold">&lt;LuchoWeb /&gt;</h1>
                <p className="text-lg text-gray-300 mt-2">Desarrollo Web Profesional a tu medida</p>
            </header>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-10">
                <ServiceCard title="Landing Pages" description="Diseños modernos y optimizados para convertir visitantes en clientes." />
                <ServiceCard title="Desarrollo a la Medida" description="Aplicaciones web adaptadas 100% a tus necesidades empresariales." />
                <ServiceCard title="Sitios Empresariales" description="Presencia digital profesional para tu empresa, moderna y funcional." />
                <ServiceCard title="Sitios Institucionales" description="Soluciones digitales para entidades gubernamentales e instituciones." />
                <ServiceCard title="Tiendas Online" description="Implementación con WooCommerce, Shopify y Tienda Nube." />
                <ServiceCard title="Asesorías Pagas" description="Consultorías personalizadas para orientarte en tu proyecto web." />
            </section>

            <section className="text-center py-10">
                <h2 className="text-2xl font-semibold mb-4">¡Hablemos de tu proyecto!</h2>
                <p className="text-lg text-gray-300 mb-6">Contáctame directamente por WhatsApp para una atención rápida y personalizada.</p>
                <a
                    href="https://wa.me/573246802829"
                    target="_blank"
                    className="bg-[#25D366] text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
                >
                    Escribirme al WhatsApp
                </a>
            </section>

            <footer className="text-center text-sm text-gray-400 py-6">
                &copy; {new Date().getFullYear()} Lucho Web. Todos los derechos reservados.
            </footer>
        </div>
    );
}

function ServiceCard({ title, description }) {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-sm text-left">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}
