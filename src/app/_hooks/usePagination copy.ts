import { useCallback, useEffect, useState } from "react";

export function usePagination(perPage: number, initialPage = 0) {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const page = searchParams.get('page');

      if (page) {
        setCurrentPage(Number(page));
      }
    }
  }, [initialPage]);

  const totalPages = Math.ceil(totalItems / perPage);
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = currentPage < totalPages;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', String(currentPage));
      const newUrl = url.origin + url.pathname + '?' + url.searchParams.toString();
      window.history.replaceState({}, '', newUrl);
    }
  }, [currentPage]);

  const nextPage = useCallback(() => {
    setCurrentPage(prevState => prevState + 1);
  }, []);

  const previousPage = useCallback(() => {
    setCurrentPage(prevState => prevState - 1);
  }, []);

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    currentPage,
    nextPage,
    previousPage,
    setPage,
    setTotalItems,
    totalPages,
    hasPreviousPage,
    hasNextPage
  }
}
