import Reveal from "@/components/Shared/Reveal/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DriveToday() {
  return (
    <div className="p-6 lg:my-32 max-w-7xl mx-auto">
      <div className="bg-[url('/images/background-2.avif')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="lg:flex gap-x-6">
          <div>
            <h3 className="text-4xl text-white">
              Conduce el auto de tus sueños hoy
            </h3>
            <p className="text-white text-xl my-5">
              Regístrate y explora todos nuestros autos premium
            </p>
            <Link href="/sign-in">
              <Button size={"lg"} variant={"outline"}>
                Regístrate aquí
              </Button>
            </Link>
          </div>
          <Reveal className="lg:absolute lg:-right-32 top-5" position="bottom">
            <Image
              src="/images/carSinFondo.png"
              alt="Car"
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
