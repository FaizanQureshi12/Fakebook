import "./index.css"
// import moment from 'moment' 
import { MdAddAPhoto } from 'react-icons/md'; 
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'; 
import { BsEmojiSmile } from 'react-icons/bs'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

function Centerpost(){
    return (
    <div className="centerpost">
        <img src="images/Capture.png" className="Capture" alt="" />

<div className="dopost">
<form action="">
<img src="images/Profile.jpg" className="Profile" alt="" />
    <textarea name=""placeholder="What's in your mind, Faizan? " id="" ></textarea>
<br /> 
<hr />
<div className="emoji">
<AiOutlineVideoCameraAdd/> Live video
<input type="file" name="photo" id="photo"  />
 <MdAddAPhoto />
<label htmlFor="photo">Photo</label>
<BsEmojiSmile/>Feeling/activity
</div>
</form>
</div>
<div className="post"> 
<div className="postheader">
    <img alt="profile" className="profilePhoto" src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1"  /> 
Arsalan <br /> 12-Nov-2018
 </div>
 This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, 
or other specific organizations that also use the term.
<img  alt="postimage" className="postImage" src="https://wallpaperaccess.com/full/7092222.jpg" />
<hr />
    <div className='postFooter'>
       <div><FontAwesomeIcon icon={faThumbsUp} />Like</div>
       <div><FontAwesomeIcon icon={faComment} />Comment</div>
       <div><FontAwesomeIcon icon={faShare} />Share</div>
     </div>
     <hr />
</div>

<div className="post" >
    <div className="postheader">
    <img alt="profile" className="profilePhoto" src="https://images.ctfassets.net/u0haasspfa6q/5FkFXNFQdW4j7PMJwTrMO2/a290555f887a2ca3050290d53dd9ccf6/malvestida-magazine-295605-unsplash"  />
    Hamza <br />  
    14-April-2015
    </div>

 This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, 
or other specific organizations that also use the term.
<img  alt="postimage" className="postImage" src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
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
<img alt="profile" className="profilePhoto" src="https://cdn.photographycourse.net/wp-content/uploads/2022/04/how-to-take-professional-headshots.jpg"/>
 Shakira <br />  24-May-2009
</div>

 This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, 
or other specific organizations that also use the term.
<img  alt="postimage" className="postImage" src="https://image.shutterstock.com/image-photo/lovely-beach-picture-beautiful-260nw-1554809048.jpg"/>
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
<img alt="profile" className="profilePhoto" src="https://www.lumosia.com/wp-content/uploads/2020/04/How-to-choose-a-headshot-Photographer-1-1024x683.jpg"/>
<span className="profileName"> Messi <br />  18-July-2013</span>
</div>
 This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, 
or other specific organizations that also use the term.
<img  alt="postimage" className="postImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNeWtl1XStycUQShxOYPR_LagbC6eRVZbZufKElGAH3Mvjnbr5n3qXVXdrQWaRfqBRok&usqp=CAU"/>
<hr />
    <div className='postFooter'>
       <div><FontAwesomeIcon icon={faThumbsUp} />Like</div>
       <div><FontAwesomeIcon icon={faComment} />Comment</div>
       <div><FontAwesomeIcon icon={faShare} />Share</div>
     </div>
     <hr />
         </div>
    </div>);
}
export default Centerpost;