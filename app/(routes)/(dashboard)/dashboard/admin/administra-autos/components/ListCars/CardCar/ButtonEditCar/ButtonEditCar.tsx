import { ButtonEditCarProps } from "./ButtonEditCar.types";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import FormEditCar from "../FormEditCar/FormEditCar";

export default function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Editar
          <Pencil className="h-4 w-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edita la información del auto</DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
