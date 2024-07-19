import React from "react"

interface BreadcrumbProps {
  children: React.ReactNode
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <ul
      className="flex text-gray text-sm gap-2 tracking-[1.4px]"
    >
      {children}
    </ul>
  )
}
