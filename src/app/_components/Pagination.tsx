'use client'
import { CardFooter } from "@/app/_components/ui/card";
import { Pagination as CustomPagination, PaginationButton, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "@/app/_components/ui/pagination";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, usePagination } from "../_hooks/usePagination";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
}

export function Pagination({ page, limit, total }: PaginationProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { pages, isCurrentPage, isFirstPage, isLastPage } = usePagination({ page, limit, total });

  function generateUrl(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    const url = `${pathName}?${params.toString()}`;
    return url;
  }

  return (
    <CardFooter className="justify-center">
      <CustomPagination>
        <PaginationContent>
          <PaginationItem>
            {!isFirstPage && (
              <Link href={generateUrl(page - 1)} className="text-gray hover:text-orange transition-all">
                <PaginationPrevious
                  className="cursor-pointer"
                  disabled={false}
                />
              </Link>
            )}
            {isFirstPage && (
              <PaginationPrevious
                className="cursor-pointer"
                disabled
              />
            )}
          </PaginationItem>
          {pages.map((p, index) => {
            const isCurrent = isCurrentPage(p);

            const isEllipsis = p === ELLIPSIS_LEFT || p === ELLIPSIS_RIGHT;

            if (isEllipsis) {
              return (
                <PaginationItem key={p}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }

            return (
              <PaginationItem key={p} className="group rounded-md hover:border-orange transition-all">
                <Link href={generateUrl(p)}>
                  <PaginationButton
                    className="cursor-pointer"
                    isActive={isCurrent}
                  >
                    {p}
                  </PaginationButton>
                </Link>
              </PaginationItem>
            )
          })}

          <PaginationItem>
            {isLastPage && (
              <PaginationNext
                className="cursor-pointer"
                disabled
              />
            )}
            {!isLastPage && (
              <Link href={generateUrl(page + 1)} className="text-gray hover:text-orange transition-all">
                <PaginationNext
                  className="cursor-pointer"
                />
              </Link>
            )}
          </PaginationItem>
        </PaginationContent>
      </CustomPagination>
    </CardFooter>
  )
}
