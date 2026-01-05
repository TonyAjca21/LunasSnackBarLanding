import React from "react";
import { howitworksSteps } from "../../lib/data.ts";

export function FunctionEvents() {
    return (
        <section id="como-funciona" className="py-20 bg-zinc-900 rounded-xl shadow-xl ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-16 bg-amber-500"></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-amber-400" style={{ fontFamily: 'Crimson Text, serif' }}>
                                ¿Cómo Funciona?
                            </h2>
                            <div className="h-px w-16 bg-amber-500"></div>
                        </div>
                    </div>
                </div>
            </div>


         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howitworksSteps.map((step ,index) => (
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full text-amber-400 mb-6 group-hover:bg-amber-500/30 transition-colors">
                  {step.icons}
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-amber-500/10 text-amber-400 px-4 py-1 rounded-full text-sm">
                     {index +1  }
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>



        </section >
    )
}