import "./index.css";
import moment from 'moment'
import{useState, useEffect} from 'react'
import { BsEmojiSmile } from 'react-icons/bs'; 
import { initializeApp } from "firebase/app";
import { MdAddAPhoto } from 'react-icons/md'; 
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import { getFirestore ,onSnapshot,query, serverTimestamp, orderBy, 
  deleteDoc,collection,addDoc, doc, updateDoc ,} from "firebase/firestore";

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
    const[editing,setEditing]=useState({
      editingId:null, editingText:''
    })

    useEffect(()=>{
 
    let unsubscribe = null;
    const getRealtimeData = async()=>{
    const q = query(collection(db, "posts") ,orderBy('createdOn','desc'));
       unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
        });
        setPosts(posts);
        console.log("posts: ", posts);
      });
    }
        getRealtimeData()
        return () => {
          console.log("Cleanup function");
          unsubscribe();
        }
    },[])

    const savePost = async (e)=>{
        e.preventDefault();
        console.log("postText:",postText);
        try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postText,
      createdOn:serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e); }    
  }
  
  const deletePost = async (postId) => {
    console.log("postId: ", postId);
    await deleteDoc(doc(db, "posts", postId));
  }

  const updatePost = async (e) => {
    e.preventDefault();
       await updateDoc(doc(db, "posts", editing.editingId), {
      text: editing.editingText
    });
    setEditing({
      editingId: null,
      editingText: ""
    })
     }  

  return (

    <div className="centerpost">
    <img src="images/Capture 2.png" className="Capture 2" alt="" />

<div className="dopost">

<img src="images/Profile.jpg" className="Profile" alt="" />
<form onSubmit={savePost}>
    <textarea 
    type="text" 
    className="inp"  
    placeholder="What's in your mind, Faizan?"
     onChange={(e) => {
        setPostText(e.target.value)}}       
      />
    <button type="submit" >Post</button>
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

<div>
{posts.map((eachPost , i) =>(
  <div className="post" key={i}>
    <span>{
      moment(
        (eachPost?.createdOn?.seconds) ?
          eachPost?.createdOn?.seconds * 1000 : undefined
          ).format('Do MMMM,yy, h:mm a')
      }</span>      

   <button onClick={()=>{
      deletePost(eachPost?.id)
    }}    >Delete Post
    </button>

    {(editing.editingId === eachPost?.id)?null:
    <button onClick={()=>{ setEditing({      
        editingId:eachPost?.id,
        editingText:eachPost?.text
      })
      }} >Edit</button>}

<select name="" id="">
  <option value="">
    <button >Edit Post</button>
      </option>
  <option value=""></option>
  <option value=""><button></button></option>
  <option value=""><button></button></option>
    </select>

<p>
  {(eachPost.id === editing.editingId)? 
<form onSubmit={updatePost}>
<input type='text'
value={editing.editingText}
onChange={(e)=>{ setEditing({ ...editing,  
  editingText: e.target.value }) }}
  />
<button type="submit">Update</button>
</form>
: 
eachPost?.text}
</p>
  </div>
))}
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

    </div>)
;
}

export default Centerpost;