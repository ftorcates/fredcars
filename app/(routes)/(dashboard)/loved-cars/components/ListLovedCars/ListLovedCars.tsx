"use client";

import ModalAddReservation from "@/components/Shared/ModalAddReservation/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";

export function ListLovedCars() {
  const { addLovedItem, removeLovedItem, lovedItems } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>Aún no tienes ningún auto favorito</h2>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {lovedItems.map((item: Car) => {
            const {
              cv,
              engine,
              id,
              name,
              people,
              photo,
              priceDay,
              transmission,
              type,
            } = item;

            const likedCard = lovedItems.some((item) => item.id === id);

            return (
              <div
                key={id}
                className="p-1 rounded-lg shadow-md hover:shadow-lg"
              >
                <Image
                  src={photo}
                  alt={name}
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
                <div className="p-4">
                  <div className="flex flex-col mb-3 gap-x-4">
                    <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                    <p>${priceDay} /día</p>
                  </div>
                  <p className="flex items-center">
                    <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                    {type}
                  </p>
                  <p className="flex items-center">
                    <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                    {transmission}
                  </p>
                  <p className="flex items-center">
                    <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                    {people}
                  </p>
                  <p className="flex items-center">
                    <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                    {engine}
                  </p>
                  <p className="flex items-center">
                    <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                    {cv} CV
                  </p>
                  <div className="flex items-center justify-center gap-x-3 mt-3">
                    <ModalAddReservation car={item} />
                    <Heart
                      className={`mt-2 cursor-pointer ${
                        likedCard && "fill-black"
                      }`}
                      onClick={
                        likedCard
                          ? () => removeLovedItem(id)
                          : () => addLovedItem(item)
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
