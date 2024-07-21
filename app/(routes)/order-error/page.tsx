import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function pageOrderError() {
  return (
    <>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl mb-2">Oops! Ha ocurrido un error. 🥺💔</h1>
          <p className="text-xl mb-10">
            Por favor, vuelve a intentarlo más tarde.
          </p>
          <Link href="/">
            <Button>Volver a ver los productos</Button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
