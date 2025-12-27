import {
    ShoppingCartIcon,
    TagIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import MobileMenuItem from './MobileMenuItem';
import MobileSearchBar from './MobileSearchBar';

const MobileMenu = () => {
    return (
        <nav className='relative z-10 w-full overflow-auto bg-white pb-2 sm:max-w-sm'>
            <MobileSearchBar />
            <div className='h-2' />
            <div>
                <MobileMenuItem url='/categories' label='Categories' icon={TagIcon} />
                <MobileMenuItem url='/login' label='Login' icon={UserIcon} />
                <MobileMenuItem url='/cart' label='Cart' icon={ShoppingCartIcon} />
            </div>
        </nav>
    )
}

export default MobileMenu;