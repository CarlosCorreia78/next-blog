import { Button } from 'flowbite-react';
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Are you passionate about art and technology?
            </h2>
            <p className='text-gray-500 my-2'>
            Join our blog community to dive into the exciting world where artificial intelligence meets traditional artistry!
            Discover insightful articles, inspiring interviews with artists, and engaging discussions that will spark your creativity and broaden your perspective.
            </p>
           
        </div>
        
        <div className="p-5 flex-1 ">
            <img src="https://gravitec.net/blog/wp-content/uploads/2023/08/rsz_alexmaker_limitations_of_mind_in_chroma_universe_c43069fb-1540-458f-9da5-790b6fc105f5.jpg" />
            
        </div>
    </div>
  )
}