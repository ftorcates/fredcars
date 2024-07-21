import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import ListCars from "./components/ListCars/ListCars";

export default async function DashboarPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(cars);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-4 text-3xl">Lista de autos</h2>
      </div>
      <ListCars cars={cars} />
    </div>
  );
}
