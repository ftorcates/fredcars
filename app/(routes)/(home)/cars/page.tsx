import Navbar from "@/components/Shared/Navbar/Navbar";
import { db } from "@/lib/db";
import { HeaderCars } from "./HeaderCars";
import { FilterAndListCars } from "./FilterAndListCars";

export default async function pageCars() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderCars />
        <div className="">
          <FilterAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
}
