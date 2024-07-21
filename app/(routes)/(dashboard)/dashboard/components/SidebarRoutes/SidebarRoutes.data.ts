import { Calendar, Car, Heart, SquareKanban } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Autos",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Reservas",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareKanban,
    label: "Administra los autos",
    href: "/dashboard/admin/administra-autos",
  },
  {
    icon: Calendar,
    label: "Todas las reservas",
    href: "/dashboard/admin/todas-reservas",
  },
];
