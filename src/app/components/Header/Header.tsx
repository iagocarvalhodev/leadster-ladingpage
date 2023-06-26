import Image from 'next/image'
export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-24">
        <Image src="/logo.png" width={176} height={36} alt="Leadster" />
      </div>
    </>
  )
}
