"use client";

import { Car } from "@prisma/client";
import { FilterAndListCarsProps } from "./FilterAndListCars.types";
import ListCars from "./ListCars/ListCars";
import { useEffect, useState } from "react";
import { FilterCars } from "./FilterCars/FilterCars";

export function FilterAndListCars(props: FilterAndListCarsProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>();

  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    engine: "",
    people: "",
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }
    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }
    if (filters.people) {
      filtered = filtered.filter((car) => car.people.includes(filters.people));
    }

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
      people: "",
    });
  };

  return (
    <div>
      <FilterCars
        setFilters={handleFilterChange}
        filters={filters}
        clearFilters={clearFilters}
      />
      <ListCars cars={filteredCars} />
    </div>
  );
}
