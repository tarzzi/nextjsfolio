
function Card({ children, altName, imgSrc }){
  return(
      <div className='w-11/12 sm:w-11/12 grid justify-center items-center m-auto'>
        <div>
          <img
              src={imgSrc}
              alt={altName}
              className='object-cover object-center rounded-lg shadow-md'
          />
          <div className='relative px-4 -mt-16  '>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              {children}
            </div>
          </div>
        </div>
      </div>
  )

}

export default Card