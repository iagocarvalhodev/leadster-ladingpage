'use client'
import { useGetWebinars } from '@/hooks/useGetWebinars'
import { Card } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'

export const ListVideos = () => {
  const itemsPerPage = 9
  const { webinars, currentPage, totalPages, goToPage } =
    useGetWebinars(itemsPerPage)

  return (
    <div className="py-12">
      <div className="w-full max-w-[1320px] m-auto grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 py-12 border-b border-slate-300">
        {webinars.map((webinar) => (
          <Card
            key={webinar.id}
            author={webinar.author}
            title={webinar.title}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  )
}
