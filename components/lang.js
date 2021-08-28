import Link from 'next/link'

const Lang = () => {
	return(
			<div className='w-20 grid justify-center justify-items-center items-center text-gray-700 grid-cols-2 absolute top-0 border border-dotted rounded bg-gray-200 border-gray-400 transition-all transition '>
				<Link href='/'><a className='hover:bg-gray-100 hover:text-black w-full block text-center'><h3 className='font-bold'>FI</h3></a></Link>
				<Link href='/en'><a className='hover:bg-gray-100 hover:text-black w-full block text-center'><h3 className='font-bold'>EN</h3></a></Link>
			</div>
	)
}
export default Lang