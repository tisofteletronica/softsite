import { CardFooter } from "./ui/card";
import { Pagination, PaginationButton, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "./ui/pagination";

interface PaginationProps {
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  setPage: (page: number) => void;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface CustomPaginationProps {
  pagination: PaginationProps;
  pages: (string | number)[];
}

export function CustomPagination({ pages, pagination }: CustomPaginationProps) {
  return (
    <CardFooter className="justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={pagination.previousPage}
              disabled={!pagination.hasPreviousPage}
            />
          </PaginationItem>

          {pages.map(page => {
            const isEllipsisPosition = typeof page === 'string';

            if (isEllipsisPosition) {
              return (
                <PaginationItem key={page}>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            }

            return (
              <PaginationItem key={page}>
                <PaginationButton
                  className="cursor-pointer"
                  isActive={pagination.currentPage === page}
                  onClick={() => pagination.setPage(page)}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            )
          })}

          <PaginationItem>
            <PaginationNext
              onClick={pagination.nextPage}
              className="cursor-pointer"
              disabled={!pagination.hasNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </CardFooter>
  )
}
