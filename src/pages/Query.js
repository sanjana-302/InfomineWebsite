import React,{useState,useEffect} from 'react';
import firebase from '../firebase/Firebase';
import Articlesidebar from '../components/Articlesidebar'; 
import Coloredline from '../components/Colerdline';



export default function Query() {

    

    const [postquery,setPost] = useState([]);
    const [isBusy,setIsbusy] =useState(false);

    const getQuery= async () =>{
        setIsbusy(true);
        const post = await firebase.Query().catch(err =>{
            console.log(err);
            return err;
        });
        
        
         setPost(post);
         setIsbusy(false);
        return post;

    }

    useEffect(() =>{
        getQuery();
    },[]);
  
    console.log(postquery);
    console.log(isBusy);

   









    let querydata;
    if(isBusy){
       querydata= (
<div className="row latestcard">
        <div className=" col-12">
            
            <div className="card__description loading3"></div><br />
            <div className="card__description loading2"></div><br />


            
            
            
        </div>
        
        </div>        )
    }else{
        querydata=(<div>

<table className="query" style={{width:"100"}}>
  <tr>
    <th style={{alignItems:"center"}}>S.No</th>
    <th>Name</th> 
    <th>Email-id</th>
    <th>Query</th>
    </tr>

    {postquery.map((item,i) =>{
                return (
                    <tr>
                        <td>{i+1}  </td>
                      <td>{item.data.name}</td>
                      <td><a style={{color:"red"}} href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+item.data.email} target="_blank">{item.data.email}</a></td>
                      <td style={{height:"auto"}}>{item.data.message}</td>
                        
                        
                        
                        </tr>
                )
            })}
  
</table>
            
            </div>

        )
    }


    


    return(

        <div className="container"><br />

        <h3 align="center">Queries by people</h3><Coloredline color="black" /> <br />



        <div className="form-group">
            

        <div className="row">
            <Articlesidebar />

            <div className="col-md-9 col-sm-12">
            {querydata}

            </div>
            
            
            
            </div>

        </div>
        <Coloredline color="black" />

        </div>           

    )


    
    
    
}
