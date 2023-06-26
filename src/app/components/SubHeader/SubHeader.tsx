import Image from 'next/image'
export const SubHeader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 w-full h-96 bg-secundaryLeadster">
        <div className="border-2 border-blueLeadster text-[9px] sm:text-sm py-1 px-3 sm:px-4 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md">
          <span className="text-blueLeadster font-bold uppercase antialiased">
            Webinars Exclusivos
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-b border-slate-300 sm:px-8 pb-4 relative">
          <span className="text-textPrimary text-xl sm:text-4xl md:text-[2.7em] font-medium tracking-normal antialiased">
            Menos Conversinha,
          </span>
          <h1 className="text-[2em] sm:text-6xl md:text-[5em] gradient-text font-bold text-textSecundary antialiased">
            Mais Conversão
          </h1>
          <Image
            src="/asset-header.png"
            alt=""
            width={0}
            height={0}
            className="absolute w-5 top-7 sm:w-10 sm:top-10 -right-2 sm:right-4 md:right-5 md:top-12"
          />
        </div>
        <span className="text-textPrimary text-[10px] font-bold sm:text-xs md:text-sm lg:text-base antialiased">
          Conheça as estratégias que{' '}
          <strong className="antialiased">mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </span>
      </div>
    </>
  )
}
