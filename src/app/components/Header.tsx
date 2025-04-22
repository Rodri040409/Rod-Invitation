'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [solapaZIndex, setSolapaZIndex] = useState(600);
  const [tiempoRestante, setTiempoRestante] = useState('');

  useEffect(() => {
    if (abierto) {
      setTimeout(() => {
        setSolapaZIndex(200);
      }, 800);
    }
  }, [abierto]);

  useEffect(() => {
    const evento = new Date('2025-04-24T11:30:00');

    const actualizarCuentaRegresiva = () => {
      const ahora = new Date();
      const diferencia = evento.getTime() - ahora.getTime();

      if (diferencia <= 0) {
        setTiempoRestante('¡Ya comenzó! 🎉');
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      setTiempoRestante(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
    };

    const interval = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva();

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="grid place-items-center min-h-screen bg-gradient-to-b from-[#0b0f1e] to-[#1a1f2e] px-4 text-white overflow-hidden">
      <div className=" grid place-items-center relative w-full max-w-[600px] aspect-[300/350] sm:aspect-[800/350] [perspective:1000px] translate-x-[1.5rem]">
        {/* Carta */}
        <motion.div
          className="absolute left-[1.5%]  w-[89%] sm:w-[580px] min-h-[20rem] sm:min-h-[300px] bg-white text-black p-4 sm:p-6 rounded shadow top-[13rem] sm:top-[30px] z-[300] "
          animate={abierto ? {
            y: [-10, -340, 0],
            zIndex: 500
          } : { y: 0, zIndex: 300 }}
          transition={{
            y: { delay: 0.7, duration: 2, ease: 'easeInOut', times: [0, 0.5, 1] },
            zIndex: { delay: 1.5 }
          }}
        >
          <h1 className="text-xl sm:text-2xl font-bold text-center">¡Estás invitado a mi cumpleaños! 🎉</h1>
          <p className="text-sm sm:text-base text-center leading-relaxed">
            Te espero este <strong>jueves 24 de abril</strong> a las <strong>11:30 AM</strong> para celebrar juntos con una taquiza deliciosa. 🌮
          </p>
          <p className="text-sm sm:text-base text-center leading-relaxed">
            ¡Habrá <strong>alberca</strong>, por si gustas traer traje de baño! 🏊‍♂️
          </p>
          <p className="text-sm sm:text-base text-center leading-relaxed">
            La fiesta será en el salón hazmín, con comida rica, música y buena compañía.
          </p>
          <p className="text-sm sm:text-base text-center leading-relaxed font-medium">
            Cuenta regresiva: <span className="text-[#081D3D] font-bold">{tiempoRestante}</span>
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.google.com.mx/maps/place/19%C2%B027'25.6%22N+96%C2%B057'13.2%22W/@19.45711,-96.95367,16z/data=!4m4!3m3!8m2!3d19.4571111!4d-96.9536667?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" // Reemplazar con enlace correcto
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-2 bg-[#081D3D] text-white rounded-lg border border-[#081D3D] hover:bg-white hover:text-[#081D3D] transition text-sm sm:text-base"
            >
              Ver ubicación
            </a>
          </div>
        </motion.div>

        {/* Lado izquierdo */}
        <div className="absolute top-[11.5rem] sm:top-0 left-[calc(53.5%-50vw)] sm:left-[calc(50%-300px)] w-0 h-0 border-l-[50vw] sm:border-l-[300px] border-t-[8rem] sm:border-t-[16rem] border-b-[8rem] sm:border-b-[16rem] border-l-[#081d3d] border-t-transparent border-b-transparent z-[310]" />

        {/* Lado derecho */}
        <div className="absolute top-[11.5rem] sm:top-0 left-[38.5%] sm:left-[300px] w-0 h-0 border-r-[50vw] sm:border-r-[300px] border-t-[8rem] sm:border-t-[16rem] border-b-[8rem] sm:border-b-[16rem] border-r-[#081d3d] border-t-transparent border-b-transparent z-[310]" />

        {/* Solapa superior con animación 3D */}
        <motion.div
          className="absolute top-[11.6rem] sm:top-0 -left-[1.6rem] sm:left-0 w-full h-[200px] origin-top pointer-events-none"
          animate={{ rotateX: abierto ? 180 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d', transformOrigin: 'top', zIndex: solapaZIndex }}
        >
          <div className="w-0 h-0 mx-auto border-l-[43vw] sm:border-l-[300px] border-r-[43vw] sm:border-r-[300px] border-t-[11rem] sm:border-t-[20rem] border-l-transparent border-r-transparent border-t-[#193e6e]" />
        </motion.div>

        {/* Parte de atrás */}
        <div className="absolute top-[11.5rem] sm:top-0 left-[46%] sm:left-1/2 -translate-x-1/2 w-[90%] sm:w-[600px] h-[190px] bg-[#072247] rounded-b-[30px] z-[30]" />

        {/* Parte inferior */}
        <div className="absolute top-[160px] left-[46%] sm:left-1/2 -translate-x-1/2 w-[90%] sm:w-[600px] h-[190px] bg-[#072247] rounded-b-[30px] z-[309]" />

        {/* Botón */}
        {!abierto && (
          <motion.button
            onClick={() => setAbierto(true)}
            className="absolute top-[250px] left-[25%] sm:left-[35%] w-[160px] sm:w-[180px] h-[50px] sm:h-[60px] text-[18px] sm:text-[20px] text-white border-2 border-white rounded-[10px] hover:bg-white hover:text-[#081D3D] transition-transform duration-300 hover:scale-110 z-[311]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Abrir
          </motion.button>
        )}
      </div>
    </header>
  );
}
