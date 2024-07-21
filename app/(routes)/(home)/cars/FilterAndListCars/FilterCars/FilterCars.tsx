import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterCarsProps } from "./FilterCars.types";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export function FilterCars(props: FilterCarsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className="mt-5 mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-5">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de auto" />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tipo de auto</SelectLabel>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="familiar">Familiar</SelectItem>
              <SelectItem value="deluxe">Deluxe</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cambio de marchas" />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cambio de marchas</SelectLabel>
              <SelectItem value="manual">Manual</SelectItem>
              <SelectItem value="automatic">Automático</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de motor" />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tipo de motor</SelectLabel>
              <SelectItem value="gasoil">Gasolina</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="electric">Eléctrico</SelectItem>
              <SelectItem value="hybrid">Híbrdo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cantidad de personas" />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cantidad de personas</SelectLabel>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="7">7</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      <Button onClick={clearFilters}>
        Limpiar filtros <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
