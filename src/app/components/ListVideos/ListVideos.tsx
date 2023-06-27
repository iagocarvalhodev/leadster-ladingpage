'use client'
import { useGetWebinars } from '../../../hooks/useGetWebinars'
import { Card } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'

export const ListVideos = () => {
  const itemsPerPage = 9
  const { webinars, currentPage, totalPages, goToPage, setFilter } =
    useGetWebinars(itemsPerPage)

  return (
    <div className="py-12">
      <div className="w-full max-w-[1320px] m-auto grid grid-cols-2 lg:flex gap-3 font-medium border-b border-slate-300 py-5">
        <button
          className="py-1.5 lg:px-3 border border-zinc-900 rounded-full hover:border-[#2c83fb] hover:text-[#2c83fb] antialiased"
          onClick={() => setFilter('agency')}
        >
          <span>Agências</span>
        </button>
        <button
          className="py-1.5 lg:px-3 border border-zinc-900 rounded-full hover:border-[#2c83fb] hover:text-[#2c83fb] antialiased"
          onClick={() => setFilter('chatbot')}
        >
          <span>Chatbot</span>
        </button>
        <button
          className="py-1.5 lg:px-3 border border-zinc-900 rounded-full hover:border-[#2c83fb] hover:text-[#2c83fb] antialiased"
          onClick={() => setFilter('mkdigital')}
        >
          <span>Marketing Digital</span>
        </button>
        <button
          className="py-1.5 lg:px-3 border border-zinc-900 rounded-full hover:border-[#2c83fb] hover:text-[#2c83fb] antialiased"
          onClick={() => setFilter('leads')}
        >
          <span>Geração de Leads</span>
        </button>
        <button
          className="py-1.5 lg:px-3 border border-zinc-900 rounded-full hover:border-[#2c83fb] hover:text-[#2c83fb] antialiased"
          onClick={() => setFilter('paidMidia')}
        >
          <span>Mídia</span>
        </button>
      </div>
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
