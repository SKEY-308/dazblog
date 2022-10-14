import React, { useState, useEffect } from 'react'
import Link from 'next/link';


// const categories = [{ name: 'React', slug: 'react' }, { name: 'Web Developement', slug: 'webdev' }]


import { getCategories } from '../services';


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);

    return (
        <div className='container-fluid mx-auto px-10 mb-8'>
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-3xl text-white">DazBlog</span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    { categories.map((category) => (
                        <Link key={ category.slug } href={ `/category/${category.slug}` }>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{ category.name }</span>
                        </Link>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Header