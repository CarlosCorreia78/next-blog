import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      body: JSON.stringify({ limit: 9, order: 'desc' }),
      cache: 'no-store',
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log('Error getting post:', error);
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Technology reshapes artistic expression</h1>
        <p className='text-gray-500 text-sm sm:text-base'>
        In an era where technology reshapes artistic expression, 
        the fusion of artificial intelligence and traditional techniques offers exciting new possibilities for creators. 
        This blog explores how AI tools can enhance classic methods.  
        Join us as we navigate the dynamic intersection of human creativity and computational innovation, 
        revealing fresh dimensions of artistry and challenging our perceptions of what it means to create.{' '}
          
          .
        </p>
        <Link
          href='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      
      <div className='max-w-7xl bg-white dark:bg-gray-900'>
        <CallToAction />
      </div>
      <div className='p-3 flex flex-col gap-8 py-7'>
        <RecentPosts limit={9} />
        <Link
          href={'/search?category=null'}
          className='text-lg text-teal-500 hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}
