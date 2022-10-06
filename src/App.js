// import moment from 'moment';
// import ReactDOM from 'react-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

// let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
//   <div className='post'>
//     <div className='postHeader'>
//       <img className='profilePhoto' src={profilePhoto} alt="not found" />
//       <div>
//         {name} <br />
//         {moment(postDate).fromNow()}
//       </div>
//     </div>

//     <div className='postText'>{postText}</div>
//     <img className='postImage' src={postImage} alt='fake' />
//     <hr />
//     <div className='postFooter'>
//       <div><FontAwesomeIcon icon={faThumbsUp} />Like</div>
//       <div><FontAwesomeIcon icon={faComment} />Comment</div>
//       <div><FontAwesomeIcon icon={faShare} />Share</div>
//     </div>
//     <hr />
//   </div>);

// let Page=()=>(
//    <div id='page'>
//     <Post name="Faizan"
//       profilePhoto="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1"
//       postDate="12 Dec 2021"
//       postImage='https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-6/305115698_623884675971446_6234299726024138156_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG1qnzpQkjPcNrdYOK6t8p7bSG1_FTv11ltIbX8VO_XWQsQhU0ZfqOpbStLO9qiD0UCAHnorllZ1D5dYSqdg9V7&_nc_ohc=5bYPaO76jNkAX9iyGLI&_nc_zt=23&_nc_ht=scontent.fkhi4-2.fna&oh=00_AT-JUP7_cX5TsOExwpqv1dkWEH_sEl3LaGnjMarMDjs7CA&oe=632CCA1E'
//       postText='This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, or other specific organizations that also use the term.' />

//     <Post
//       name="Hassan"
//       profilePhoto="https://images.ctfassets.net/u0haasspfa6q/5FkFXNFQdW4j7PMJwTrMO2/a290555f887a2ca3050290d53dd9ccf6/malvestida-magazine-295605-unsplash"
//       postDate='12 March 2022'
//       postImage='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
//       postText='This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, or other specific organizations that also use the term.' />

//     <Post name="Sufyan"
//       profilePhoto="https://cdn.photographycourse.net/wp-content/uploads/2022/04/how-to-take-professional-headshots.jpg"
//       postDate='17 june 2019'
//       postImage='data:image/jpeg;base64,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'
//       postText='This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, or other specific organizations that also use the term.' />

//     <Post name="Aliyan"
//       profilePhoto="https://www.lumosia.com/wp-content/uploads/2020/04/How-to-choose-a-headshot-Photographer-1-1024x683.jpg"
//       postDate='30 feb 2020'
//       postImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNeWtl1XStycUQShxOYPR_LagbC6eRVZbZufKElGAH3Mvjnbr5n3qXVXdrQWaRfqBRok&usqp=CAU'
//       postText='This article is about the decentralized social movement. Not to be confused with Black Lives Matter Global Network Foundation, or other specific organizations that also use the term.' />

//   </div>
// )

// ReactDOM.render(<Page />, document.querySelector('#root'));

import { useState, useEffect } from "react"
// import "./index.css";
import Post from "./../post"
import axios from "axios";

function Home() {

    const [isLit, setLit] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
            .then(response => {
                console.log("response: ", response.data);
                setPosts(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })

    }, [])

    const clickHandler = () => {
        console.log("I am click handler")
        setLit(!isLit)
    }
    return (
        <div className={`room ${(isLit) ? "lit" : "dark"}`}>
            <button onClick={clickHandler} >Toggle Dark Mode</button>
            {
                posts.map((eachPost, i) => (
                    <>
                        <Post
                            name={eachPost.name}
                            postText={eachPost.postText}
                            profilePhoto={eachPost.profilePhoto}
                            postImage="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
                            postDate={eachPost.postDate}
                        ></Post>
                    </>
                ))
            }
        </div>
    );
}

export default Home;
