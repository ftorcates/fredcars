import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function pageOrderConfirmation() {
  return (
    <>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl mb-3">
            Muchas gracias por confiar en nosotros 💖
          </h1>
          <p>
            En breves momentos recibirás toda la información a través de tu
            correo electrónico 📨
          </p>
          <p className="mb-10">
            Puedes visualizar todas tus reservas dentro de tu área de cliente.
          </p>
          <Link href="/">
            <Button>Volver a ver los productos</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
