interface PaginationProps {
  currentPage: number
  totalPages?: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from(Array(totalPages).keys()).map((i) => i + 1)

  return (
    <div className="flex justify-center items-center gap-1 font-bold antialiased my-5">
      Página
      {pages.map((page) => (
        <button
          key={page}
          className={`rounded-md px-3 py-0.5 ${
            page === currentPage &&
            'border border-[#2c83fb] font-extrabold text-[#2c83fb] transition'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
