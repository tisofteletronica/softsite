'use client'
import { CustomPagination } from "@/app/_components/CustomPagination";
import { usePagination } from "@/app/_hooks/usePagination";
import { generateEllipsisPagination } from "@/lib/utils";
import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  categoryId: string;
}

export function Pagination({ currentPage, totalPages, categoryId }: PaginationProps) {
  const pagination = usePagination(totalPages, currentPage);

  const pages = useMemo(() => {
    return generateEllipsisPagination(pagination.currentPage, pagination.totalPages);
  }, [pagination.currentPage, pagination.totalPages]);

  return (
    <CustomPagination pages={pages} pagination={pagination} categoryId={categoryId} />
  )
}
