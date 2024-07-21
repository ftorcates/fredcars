import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves/TableReserves";
import { isAdmin } from "@/lib/isAdmin";

export default async function pageAdminReserves() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdmin(userId)) {
    redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Todas las Reservas 🚗📝</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h2 className="text-xl mb-10">No hay ningún pedido 🥺</h2>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}
