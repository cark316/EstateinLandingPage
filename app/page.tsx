import Image from 'next/image'

export default function Home() {
  const sectionTop = 'flex items-center justify-center h-full bg-[#141414]'
  const sectionTopContainer = 'flex-1 pl-[162px] pr-[80px]'
  const sectionBottom = 'flex border border-[#262626] bg-[#141414] h-[252px]'
  const paraBig = 'text-[60px] leading-[72px] pb-[24px] font-semibold text-white break-words'
  const paraSmall = 'text-[18px] font-medium text-[#999999] break-words pb-[60px]'
  const buttonSection = 'flex pb-[60px]'
  const blackBtn = 'border border-[#262626] bg-[#141414] pt-[14px] pb-[14px] pr-[24px] pl-[24px] rounded-[10px] mr-[30px] text-white'
  const purpleBtn = 'border border-[#262626] bg-[#703BF7] pt-[14px] pb-[14px] pr-[24px] pl-[24px] rounded-[10px] mr-[30px] text-white'
  const infoSection = 'flex flex-wrap'
  const infoBlock = 'flex w-[240px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] mr-[20px] border border-[#262626] bg-[#1A1A1A] text-white rounded-[12px]'
  const linkContainer = 'relative flex flex-col border border-[#262626] items-center justify-center w-[455px] h-[212px] text-white mr-[10px] ml-[10px] mt-[20px] rounded-[12px]'
  
  return (
    <main className='h-full'>
      <section className={sectionTop}>
        <section className={sectionTopContainer}>
          <p className={paraBig}>
            Discover Your Dream Property with Estatein
          </p>
          <p className={paraSmall}>
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          <div className={buttonSection}>
            <button className={blackBtn}>
              Learn More
            </button>
            <button className={purpleBtn}>
              Browse Properties
            </button>
          </div>
          <div className={infoSection}>
            <div className={infoBlock}>
              <ul>
                <li className='font-bold text-[40px]'>
                  200+
                </li>
                <li className='text-medium text-[#999999]'>
                  Happy Customers
                </li>
              </ul>
            </div>
            <div className={infoBlock}>
              <ul>
                <li className='font-bold text-[40px]'>
                  10k+
                </li>
                <li className='text-medium text-[#999999]'>
                  Properties For Clients
                </li>
              </ul>
            </div>
            <div className={infoBlock}>
              <ul>
                <li className='font-bold text-[40px]'>
                  16+
                </li>
                <li className='text-medium text-[#999999]'>
                  Years of Experience
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section> 
          <Image src='/Container.svg' alt='background' height={920} width={814} />
        </section>
      </section>
      <section className={sectionBottom}>
        <div className={linkContainer}>
          <Image className='absolute top-[25px] right-[25px]' src='/ArrowIcon.svg' alt='arrow' height={34} width={34} />
          <Image className='pb-[20px]' src='/HomeIcon.svg' alt='icon' height={82} width={82} />
          Find Your Dream House
        </div>
        <div className={linkContainer}>
          <Image className='absolute top-[25px] right-[25px]' src='/ArrowIcon.svg' alt='arrow' height={34} width={34} />
          <Image className='pb-[20px]' src='/MoneyIcon.svg' alt='icon' height={82} width={82} />
          Unlock Property Value
        </div>
        <div className={linkContainer}>
          <Image className='absolute top-[25px] right-[25px]' src='/ArrowIcon.svg' alt='arrow' height={34} width={34} />
          <Image className='pb-[20px]' src='/PropertyIcon.svg' alt='icon' height={82} width={82} />
          Effortless Property Management
        </div>
        <div className={linkContainer}>
          <Image className='absolute top-[25px] right-[25px]' src='/ArrowIcon.svg' alt='arrow' height={34} width={34} />
          <Image className='pb-[20px]' src='/SunIcon.svg' alt='icon' height={82} width={82} />
          Smart Investments, Informed Decisions
        </div>
      </section>
    </main>
  )
}

