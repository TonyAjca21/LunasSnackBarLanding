import React from "react";
import { Instagram, Facebook ,Phone,MessageCircle} from "lucide-react";
export function ContactForm() {
    return (
        <section id="contacto" className="py-20 bg-black-900 rounded-xl shadow-xl ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-16 bg-amber-500"></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-amber-400" style={{ fontFamily: 'Crimson Text, serif' }}>
                                Contáctanos
                            </h2>
                            <div className="h-px w-16 bg-amber-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 px-4 max-w-2xl mx-auto">
                <p className="text-white/70 mb-5">
                    ¿Tienes preguntas o quieres reservar nuestros servicios para tu próximo evento? ¡Estamos aquí para ayudarte! Completa el formulario a continuación o contáctanos directamente a través de WhatsApp o correo electrónico. ¡Esperamos saber de ti pronto!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2 bg-green-600 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                    </a>
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2 bg-amber-900 hover:bg-amber-950 text-white font-bold py-3 px-8 rounded-full transition-colors"
                    >
                         <Phone className="w-5 h-5 " />
                      Llamar
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <a
                        href="https://instagram.com/lunassnackbar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-amber-400 transition-colors"
                    >
                        <Instagram className="w-8 h-8" />
                    </a>
                    <a
                        href="https://facebook.com/lunassnackbar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-amber-400 transition-colors"
                    >
                        <Facebook className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </section>


    )



}