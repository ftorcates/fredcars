export type FilterCarsProps = {
  setFilters: (filterName: string, value: string) => void;
  filters: {
    type: string;
    transmission: string;
    engine: string;
    people: string;
  };
  clearFilters: () => void;
};
