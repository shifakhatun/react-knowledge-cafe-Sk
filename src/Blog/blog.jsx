
import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark}) => {
    // console.log(blog)
    const {title, cover, author, author_img, reading_time, posted_date, hashtags }=blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-4'>
                  <img className='w-14' src={author_img} alt="author" />
                  <div className='ml-6'>
                    <h4 className='font-bold'>{author}</h4>
                    <p>{posted_date}</p>

                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span>{reading_time} min read</span> 
                  <button onClick={()=>handleAddToBookmark(blog)} ><IoBookmarkOutline></IoBookmarkOutline> </button>

                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} > <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;