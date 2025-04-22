import { useTranslation } from 'react-i18next';

export default function LuchoWebLanding() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className="min-h-screen bg-[#0f0f0f] text-white p-6 font-sans">
                <header className="text-center py-10 relative">
                    <div className="absolute top-4 right-6 space-x-2 md:top-6 md:right-10 z-10">
                        <button onClick={() => changeLanguage('es')} className="px-3 py-1 rounded bg-white text-black text-sm">ES</button>
                        <button onClick={() => changeLanguage('en')} className="px-3 py-1 rounded bg-white text-black text-sm">EN</button>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-4xl font-bold">{t('title')}</h1>
                        <p className="text-lg text-gray-300 mt-2">{t('subtitle')}</p>
                    </div>
                </header>

                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-10">
                    <ServiceCard title={t('service1')} description={t('desc1')} />
                    <ServiceCard title={t('service2')} description={t('desc2')} />
                    <ServiceCard title={t('service3')} description={t('desc3')} />
                    <ServiceCard title={t('service4')} description={t('desc4')} />
                    <ServiceCard title={t('service5')} description={t('desc5')} />
                    <ServiceCard title={t('service6')} description={t('desc6')} />
                </section>

                <section className="text-center py-10">
                    <h2 className="text-2xl font-semibold mb-4">{t('ctaTitle')}</h2>
                    <p className="text-lg text-gray-300 mb-6">{t('ctaText')}</p>
                    <a
                        href="https://wa.me/573246802829"
                        target="_blank"
                        className="bg-[#25D366] text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
                    >
                        {t('ctaButton')}
                    </a>
                </section>

                <footer className="text-center text-sm text-gray-400 py-6">
                    &copy; {new Date().getFullYear()} Lucho Web. {t('footer')}
                </footer>
            </div>
        </>
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
