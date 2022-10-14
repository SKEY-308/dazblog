import React from 'react'
import moment from 'moment'
import Link from 'next/link'
// import { NextPage } from 'next/types';
import Image from 'next/image';


const PostCard = ({ post }) => {

    // console.log(post)

    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={ post.featuredImage.url } alt={ post.title } className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
            </div>

            <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href={ `/post/${post.slug}` }>
                    { post.title }
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                    <Image
                        unoptimized

                        alt={ post.author.name }
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={ post.author.photo.url }
                    />
                    <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{ post.author.name }</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard