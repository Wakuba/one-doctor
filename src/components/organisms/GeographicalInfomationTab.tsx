const GeographicalInformationTab = () => (
  <div className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'>
    <div className='space-y-8'>
      <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
        周辺地図
      </div>
      <iframe
        className='w-full mb-10 h-[50vw]'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279785.1765704249!2d140.17047807758485!3d35.991258388550875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220bff99f57b0b%3A0x1cad40e7632fb4b8!2z562R5rOi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1626441216082!5m2!1sja!2sjp'
        width='600'
        height='450'
        loading='lazy'
      ></iframe>
    </div>
  </div>
)

export default GeographicalInformationTab
