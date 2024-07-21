import { featuresData } from "./Features.data";
import Reveal from "@/components/Shared/Reveal/Reveal";

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto p-6 lg:py-40">
      <h3 className="text-2xl lg:text-6xl font-bold">Servicios claves</h3>
      <p className="max-w-lg mt-5 lg:mt-10 lg:mb-16 text-xl">
        Trabajamos para ofrecer confort y seguridad a nuestros clientes, al
        mejor precio del mercado
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5">
        {featuresData.map(({ icon: Icon, text, bg, delay }) => (
          <Reveal
            key={text}
            className="p-6 rounded-xl hover:shadow-md flex flex-col items-center"
            position="right"
            delay={delay}
          >
            <div
              className={`rounded-full ${bg} w-fit p-4 mb-4 flex justify-center`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <p className="font-bold text-center text-xl">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
