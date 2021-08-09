
export default function Card({ name, imgSrc, altName, tech, description, code, demo  }){
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
              <h4 className='mt-1 text-xl font-semibold uppercase leading-tight truncate'>
                {name}
              </h4>

              <div className='mt-2'>
                {tech.map(techName => (
                    <span className='bg-gray-300 rounded-full mr-2 px-3 py-0.5 font-semibold'>
                        {techName}
                      </span>
                ))}
              </div>
              <div className='mt-4'>
                {description}
              </div>
              <div className='mt-4'>
                <a
                    className='border py-2 px-4 bg-gray-700 shadow text-white rounded-full hover:bg-gray-600 transition duration-100'
                    href={code}
                >
                  Code
                </a>
                <a
                    href={demo}
                    className='border py-2 px-4 ml-4 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-100'
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}