import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createExcerpt(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  // Certifique-se de que não estamos cortando no meio de uma palavra
  let trimmedText = text.slice(0, maxLength).trim();
  let lastSpaceIndex = trimmedText.lastIndexOf(" ");

  // Se houver um espaço, corte até ele para evitar cortar no meio de uma palavra
  if (lastSpaceIndex > 0) {
    trimmedText = trimmedText.slice(0, lastSpaceIndex);
  }

  return trimmedText + '...';
}

export function generateEllipsisPagination(
  currentPage: number,
  totalPages: number,
  surroundingPages = 1
) {
  const pages: (number | string)[] = [];

  for (let i = 1; i <= totalPages; i++) {
    const isFirstPage = i === 1;
    const isLastPage = i === totalPages;
    const isWithinLowerBound = i >= (currentPage - surroundingPages);
    const isWithinUpperBound = i <= (currentPage + surroundingPages);
    const isEllipsisPosition = (
      i === currentPage - surroundingPages - 1 ||
      i === currentPage + surroundingPages + 1
    );

    if (isEllipsisPosition && !isFirstPage && !isLastPage) {
      pages.push('...');
      continue;
    }

    if ((isFirstPage || isLastPage) || (isWithinLowerBound && isWithinUpperBound)) {
      pages.push(i);
    }
  }

  return pages;
}
