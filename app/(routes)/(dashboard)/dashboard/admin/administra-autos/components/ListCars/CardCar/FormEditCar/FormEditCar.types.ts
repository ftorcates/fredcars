import { Car } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type FormEditCarProps = {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  carData: Car;
};
