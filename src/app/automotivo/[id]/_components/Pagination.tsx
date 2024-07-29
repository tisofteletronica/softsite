'use client'
import { CustomPagination } from "@/app/_components/CustomPagination";
import { usePagination } from "@/app/_hooks/usePagination";
import { generateEllipsisPagination } from "@/lib/utils";
import { useMemo } from "react";

export function Pagination() {
  const pagination = usePagination(20);

  const pages = useMemo(() => {
    return generateEllipsisPagination(pagination.currentPage, pagination.totalPages);
  }, [pagination.currentPage, pagination.totalPages]);

  return (
    <CustomPagination pages={pages} pagination={pagination} />
  )
}
