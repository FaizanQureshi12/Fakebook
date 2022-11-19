import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

function Centerpost() {
 
return (
  <div className="centerpost">

      <div className="post">
        <div className="postheader">
          <img alt="profile" className="profilePhoto" src="https://cdn.photographycourse.net/wp-content/uploads/2022/04/how-to-take-professional-headshots.jpg" />
          Shakira <br />  24-May-2009
        </div>

        This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation,
        or other specific organizations that also use the term.
        <img alt="postimage" className="postImage" src="https://image.shutterstock.com/image-photo/lovely-beach-picture-beautiful-260nw-1554809048.jpg" />
        <hr />
        <div className='postFooter'>
          <div><FontAwesomeIcon icon={faThumbsUp} />Like</div>
          <div><FontAwesomeIcon icon={faComment} />Comment</div>
          <div><FontAwesomeIcon icon={faShare} />Share</div>
        </div>
        <hr />
      </div>

      <div className="post">
    <div className="postheader">
      <img alt="profile" className="profilePhoto" src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1" />
      Arsalan <br /> 12-Nov-2018
    </div>
    This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation,
    or other specific organizations that also use the term.
    <img alt="postimage" className="postImage" src="https://wallpaperaccess.com/full/7092222.jpg" />
    <hr />
    <div className='postFooter'>
      <div><FontAwesomeIcon icon={faThumbsUp} />Like</div>
      <div><FontAwesomeIcon icon={faComment} />Comment</div>
      <div><FontAwesomeIcon icon={faShare} />Share</div>
    </div>
    <hr />
    </div>

    </div>)
    ;
}
export default Centerpost;