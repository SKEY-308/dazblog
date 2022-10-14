import type { NextPage } from 'next'
import Head from 'next/head'
import { Key } from 'react';
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from '../services';


// const posts = [
//   {
//     title: 'React Testing',
//     excerpt: 'Learn React Testing'
//   },
//   {
//     title: 'React with Tailwind',
//     excerpt: 'Learn React with Tailwind'
//   }
// ];



interface Props {
  posts: any
}


const Home: NextPage<Props> = ({ posts }) => {

  console.log(posts)

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>DazBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8 col-span-1">

          {posts.map((post: { node: any; }, index: Key | null | undefined) => (

            <PostCard key={index} post={post.node} />

          ))}

        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>

      </div>

    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Home
