import Image from 'next/image'
export const BannerLeads = () => {
  return (
    <>
      <div className="bg-secundaryLeadster w-full h-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 max-w-[1320px] m-auto">
          <div className="col-lg-6 z_index_2 p-5">
            <Image
              src="/comparativo.png"
              alt="comparativos leadster"
              width={800}
              height={0}
            />
          </div>
          <div className="col-lg-6 z_index_2 lozad p-5 flex flex-col justify-center items-start">
            <span className="text-textPrimary text-xl sm:text-4xl md:text-[2.7em] font-medium tracking-normal antialiased">
              Pronto para triplicar sua
            </span>
            <span className="text-textPrimary mt-2 text-xl sm:text-4xl md:text-[2.7em] font-bold tracking-normal antialiased">
              Geração de Leads?
            </span>
            <span className="text-textPrimary text-xl sm:text-xl md:text-[18px] font-bold mt-4 tracking-normal antialiased">
              Criação e ativação em 4 minutos
            </span>

            <div className="flex flex-row gap-4 justify-center items-center">
              <button className="w-64 h-16 mt-5 bg-blueLeadster hover:bg-transparent text-secundaryLeadster font-semibold hover:text-secundaryLeadster py-2 px-4 border border-blueLeadster hover:border-transparent rounded-full">
                Ver Demonstração
              </button>
              <Image src="/selo_RD.png" alt="RD" width={200} height={53} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
