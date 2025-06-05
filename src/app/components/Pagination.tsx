"use client";

import { usePagination } from "@/app/hooks/usePagination";
import { FC } from "react";

interface PaginationProps {
  totalPages: number;
  onChange?: (currentPage: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ totalPages, onChange }) => {
  const { currentPage, goToPage, nextPage, pagesList, prevPage } =
    usePagination({ onChange, totalPages });

  return (
    <div className="App">
      <p>{currentPage ?? 1}</p>
      <button onClick={prevPage}>Prev page</button>
      {pagesList.map((page) => (
        <button key={page} onClick={() => goToPage(page)}>
          {page}
        </button>
      ))}
      <button onClick={nextPage}>Next page</button>
    </div>
  );
};
