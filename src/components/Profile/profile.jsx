import './profile.css'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { MdAddAPhoto } from 'react-icons/md';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import Navbar from '../Navbar/navbar';
import {
  getFirestore, onSnapshot, query, serverTimestamp, orderBy,
  deleteDoc, collection, addDoc, doc, updateDoc,
} from "firebase/firestore";
// import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { ref, list, uploadBytes, getStorage, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//  const auth = getAuth(app);
const storage = getStorage(app)

function Profile() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])
  const [editing, setEditing] = useState({
    editingId: null, editingText: ''
  })

  useEffect(() => {

    let unsubscribe = null;
    const getRealtimeData = async () => {
      const q = query(collection(db, "posts"), orderBy('createdOn', 'desc'));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageList((prev) => [...prev, url])
            })
          })
          console.log(response);

        })
        setPosts(posts);
        console.log("posts: ", posts);
      });
    }
    getRealtimeData()
    return () => {
      console.log("Cleanup function");
      unsubscribe();
    }
  }, [])

  const savePost = async (e) => {
    e.preventDefault();
    console.log("postText:", postText);
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postText,
        createdOn: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const imageListRef = ref(storage, 'images/')
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
      alert('Image Uploaded')
    })
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

    <div className='centerpost'>
      <Navbar />
      <img src="images/Capture 2.png" className="Capture 2" alt="" />

      <div className="dopost">

        <img src="images/Profile.jpg" className="Profile" alt="" />
        <form onSubmit={savePost}>
          <textarea
            type="text"
            className="inp"
            placeholder="What's in your mind, Faizan?"
            onChange={(e) => {
              setPostText(e.target.value)
            }}
          />
          <button type="submit" onClick={uploadImage} >Post</button>
          <br />
          <hr />

          <div className="emoji">
            <AiOutlineVideoCameraAdd /> Live video
            <input type="file" name="photo"
              id="photo"
              onChange={(e) => {
                setImageUpload(e.target.files[0])
              }}
            />
            <MdAddAPhoto />
            <label htmlFor="photo" >Photo</label>
            <BsEmojiSmile />Feeling/activity
          </div>
        </form>
      </div>

      <div>
        {posts.map((eachPost, i) => (
          <div className="post" key={i}>
            <span>{
              moment(
                (eachPost?.createdOn?.seconds) ?
                  eachPost?.createdOn?.seconds * 1000 : undefined
              ).format('Do MMMM,yy, h:mm a')
            }</span>

            <button onClick={() => {
              deletePost(eachPost?.id)
            }}    >Delete Post
            </button>

            {(editing.editingId === eachPost?.id) ? null :
              <button onClick={() => {
                setEditing({
                  editingId: eachPost?.id,
                  editingText: eachPost?.text
                })
              }} >Edit</button>}

            {/* <select name="" id="">
                <option value="">
                  <button >Edit Post</button>
                </option>
                <option value=""></option>
                <option value=""><button></button></option>
                <option value=""><button></button></option>
              </select> */}

            <h5>
              {(eachPost.id === editing.editingId) ?
                <form onSubmit={updatePost}>
                  <input type='text'
                    value={editing.editingText}
                    onChange={(e) => {
                      setEditing({
                        ...editing,
                        editingText: e.target.value
                      })
                    }}
                  />
                  <button type="submit">Update</button>
                </form>
                :
                eachPost?.text}
            </h5>
            {/* <img width='400px' height='340px' src={url} /> */}
          </div>

        ))}

      </div>
      {imageList.map((url) => {
        return <img width='400px' height='340px' src={url} />
      })}
    </div>
  );
}
export default Profile;