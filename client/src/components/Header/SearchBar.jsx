import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
    return (
        <div className='relative hidden w-full ml-4 lg:block'>
            <MagnifyingGlassIcon className='h-4 w-4 text-slate-400 absolute left-3 top-3' />
            <input 
                type="search"
                placeholder='what are you looking for?'
                className='h-10 w-full rounded-lg bg-slate-200 px-4 pl-10 text-sm outline-slate-600 translation-all placeholder:text-slate-500' 
            />
        </div>
    )
}


export default SearchBar;