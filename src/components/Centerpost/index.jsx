import "./index.css"
// import moment from 'moment'
// import axios from 'axios'; 
import { MdAddAPhoto } from 'react-icons/md'; 
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'; 
import { BsEmojiSmile } from 'react-icons/bs'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import{useState,
  useEffect
} from 'react' 
import { initializeApp } from "firebase/app";
import { getFirestore ,
  // collection, addDoc
} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAjKVdKksfjVSfv48BAScY6Mj1-o5PJ4EU",
    authDomain: "fakebook-f5053.firebaseapp.com",
    projectId: "fakebook-f5053",
    storageBucket: "fakebook-f5053.appspot.com",
    messagingSenderId: "338974311417",
    appId: "1:338974311417:web:0d98236b57f2faf82fb328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



function Centerpost(){
    const [postText,setPostText]=useState("");
    const [posts,setPosts]=useState([]);
    const [isLoading, setIsLoading]=useState(false);

    useEffect(()=>{

    },[])

    const savePost =  (e)=>{
        e.preventDefualt();
        // try {
    //   const docRef = await addDoc(collection(db, "posts"), {
    //     text: "postText",
    //   createdOn: new Date().getTime(),
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
               
    }
    console.log("postText:",postText);


    
    return (

    <div className="centerpost">
        <img src="images/Capture 2.png" className="Capture 2" alt="" />

<div className="dopost">
    {/* <img src="images/Profile.jpg" className="Profile" alt="" /> */}

<form onSubmit={savePost}>
    <textarea type="text" 
    // className="box"  
    // value={postText}
    placeholder="What's in your mind, Faizan?"
     onChange={(e) => {
        setPostText(e.target.value)
      }} 
      />
    <button type="submit" >Post</button>
    </form>
<br /> 
<hr />


<div className="emoji">
<AiOutlineVideoCameraAdd/> Live video
<input type="file" name="photo" id="photo"  />
 <MdAddAPhoto />
<label htmlFor="photo">Photo</label>
<BsEmojiSmile/>Feeling/activity
</div>
</div>
{/* 
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
         </div> */}
    </div>);
}
export default Centerpost;