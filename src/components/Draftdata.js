import React,{useEffect} from 'react';

import firebase from '../firebase/Firebase';
import {Draft} from '../context/Draftcontext';
import {Link} from 'react-router-dom';

export default function Draftdata() {

    const [user,setUser] = React.useState("");
    const [postid, setPostid] = React.useState("");   

    useEffect(() => {
        firebase.getUserState().then(user => {
            if(user){
                
                
                setUser(user.email);
            }
        });
    });

    const {state,dispatch} = React.useContext(Draft);

    const getPostedArticlesondraft = async () =>{

        const postsArray = await firebase.getPostedArticlesonDraft(user ).catch(err =>{
            console.log(err);
            return err;
        });

        return dispatch({
            type: "FETCH_POSTS",
            payload: postsArray
        })

    }

    const shareArticleToAdmin =async (e)=>{
        const postsArray = await firebase.shareArticle().then(() =>{
            console.log("article shared sucessfully");
            alert("Your article has been shared ");

        }).catch(err =>{
            console.log(err);
        })
       
    }

    

    useEffect(() =>{
        getPostedArticlesondraft();
    })

   





    return (
        <div className="col-md-9 col-sm-12">
        <div className="row">
        <div className="col-md-1 col-sm-12" >
            <p>S.No</p>
        </div>
        <div className="col-md-4 col-sm-12" >
            <p>Artcle Name</p>
        </div>
        <div className="col-md-2 col-sm-12" >
            <p>Writer</p>
        </div>
        <div className="col-md-2 col-sm-12" >
            <p>Edit/Delete</p>
        </div>
        <div className="col-md-1 col-sm-12" >
            <p>D.O.P</p>
        </div>
        <div className="col-md-2 col-sm-12" >
            <p>Share to admins</p>
        </div>
        </div><br></br><br></br>

        

        <div className="row styling">


            { 
            state.posts.map((post,i) =>{
                return(
                    <>

                   <div className="col-md-1 col-sm-12" >
                <p>{i+1}</p>
                    </div>
                    <div className="col-md-4 col-sm-12" >
                <Link to={"article/" + post.id}><p>{post.data.name}</p></Link>
                    </div>
                    <div className="col-md-2 col-sm-12" >
                <p>{post.data.publishedBy}</p>
                    </div>
                    <div className="col-md-2 col-sm-12" >
                        <p><a className="edit">Edit</a> &nbsp;   <a className="delete">Delete</a></p>
                    </div>
                    <div className="col-md-1 col-sm-12" >
                        <p>{post.data.date}{post.data.month}</p>
                    </div>
                    <div className="col-md-2 col-sm-12" >
                        <button className="btn btn-primary" onClick={shareArticleToAdmin}>Share</button>
                    </div>
                    



                    </>
                )
            })}
        </div>
        </div>

    )
}
