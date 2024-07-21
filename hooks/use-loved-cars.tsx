import { dataAdminSidebar } from "@/app/(routes)/(dashboard)/dashboard/components/SidebarRoutes/SidebarRoutes.data";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLovedItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: Car) => {
        console.log("data ", data);
        const currentLovedItems = get().lovedItems;
        console.log("currentLoveditems ", currentLovedItems);

        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        console.log("existingItem ", existingItem);

        if (existingItem) {
          toast({ title: "Este auto ya está entre tus favoritos 🚗❌" });
        } else {
          set({
            lovedItems: [...get().lovedItems, data],
          });

          toast({ title: "Auto agregado a tus favoritos 🚗💖" });
        }
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });

        toast({ title: "Auto eliminado de tus favoritos 🚗💔" });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
