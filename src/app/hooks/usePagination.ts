"use client";

import { useMemo, useState } from "react";

interface Params {
  totalPages: number;
  currentPage?: number;
  onChange?: (currentPage: number) => void;
}

export const usePagination = ({
  currentPage,
  onChange,
  totalPages,
}: Params) => {
  const [page, setPage] = useState(currentPage ?? 1);

  const pagesList = useMemo(
    () => Array.from({ length: totalPages }, (v, i) => i + 1),
    [totalPages]
  );

  const nextPage = () => {
    const updatedPage = page + 1 <= totalPages ? page + 1 : page;
    setPage(updatedPage);
    onChange?.(updatedPage);
  };

  const prevPage = () => {
    const updatedPage = page - 1 >= 1 ? page - 1 : page;
    setPage(updatedPage);
    onChange?.(updatedPage);
  };

  const goToPage = (pageNumber: number) => {
    let newPage;
    if (pageNumber < 1) {
      newPage = 1;
    } else if (pageNumber > totalPages) {
      newPage = totalPages;
    } else {
      newPage = pageNumber;
    }
    setPage(newPage);
    onChange?.(newPage);
  };

  return {
    currentPage: page,
    goToPage,
    nextPage,
    pagesList,
    prevPage,
  };
};
