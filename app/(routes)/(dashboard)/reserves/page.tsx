import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import TableReserves from "./components/TableReserves/TableReserves";

export default async function pageReserves() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Tus Reservas 🚗📝</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-xl mb-10">No tienes ningún pedido 🥺</h2>
          <Link href="/cars">
            <Button>Ver lista de autos</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}
