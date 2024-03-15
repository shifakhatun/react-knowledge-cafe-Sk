
import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
   
    return (
        <div className="md:w-1/3 ">
             <h2 className="text-3xl">Bookmarked Blogs={bookmarks.length}</h2>
     {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
     }
           
        </div>
    );
};

Bookmarks.prototype = {
    bookmarks: PropTypes.array
}
export default Bookmarks;