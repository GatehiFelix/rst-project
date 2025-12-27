import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MobileSearhcBar = () => {
    return (
        <div className="relative block w-full px-4 py-2 sm:hidden ">
            <MagnifyingGlassIcon className="h-4 w-4 text-slate-400 absolute left-7 top-5" />
            <input 
                type="search" 
                placeholder="what are you looking for?" 
                className="h-10 w-full rounded-lg bg-slate-200 px-4 pl-10 text-sm outline-slate-600 transition-all placeholder:text-slate-500" />
        </div>
    )
}

export default MobileSearhcBar;