import { auth } from "@clerk/nextjs/server";
import ButtonAddCar from "./components/ButtonAddCar/ButtonAddCar";
import ListCars from "./components/ListCars/ListCars";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdmin } from "@/lib/isAdmin";

export default async function CarManagerPage() {
  const { userId } = auth();
  if (!userId || !isAdmin(userId)) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(cars);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Administra tus autos</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={cars} />
    </div>
  );
}
