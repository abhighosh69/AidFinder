import React, { useState } from "react";
import { FcClearFilters, FcFilledFilter } from "react-icons/fc";

const FilterButton = ({showFilter, setShowFilter}) => {
  return (
    <>
      <button
        className={`py-1 px-3 border rounded text-base transition-all sm:hidden flex items-center gap-2 ${
          showFilter ? "bg-primary text-white" : ""
        }`}
        onClick={() => {
          setShowFilter((prev) => !prev);
        }}
      >
        {showFilter ? "Close Filters" : "Filters"}
        {showFilter ? <FcClearFilters /> : <FcFilledFilter />}
      </button>
    </>
  );
};

export default FilterButton;
