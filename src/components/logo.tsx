import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/da_market_logo.png"
        alt="DA Market Securities"
        width={150}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>
  )
}