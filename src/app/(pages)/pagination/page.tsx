"use client";

import { Pagination } from "@/app/components/Pagination";

const onChange = (page: number) => {
  console.log("Current page: ", page);
};

export default function PaginationPage() {
  return <Pagination totalPages={3} onChange={onChange} />;
}
