import React from "react";

const PostItem = ({
    posts={
        "profile": "../../../image/elon musk.jpg",
        "userName": "Elon Musk",
        "time": "@elonmusk .23h",
        "head": "Amazing show about@Inspiration4x mission",
        "title": "Countdown:Inspiration Mission to Space| Netflix Official Site",
        "image": "../../../image/post1.jpg",
        "text": "The spaceflight company founded by the billionaire Elon Musk launched four private passengers into orbit Wednesday on the first mission to space with an all-civilian crew."
    }


}) => {
    return (
<div>
            <ul>
            <li className="list-group-item ">
                 <div className="row">
                 <div className="post">
                 
                 <div className="user-avatar">
                           <img src={posts.profile} alt={""}/>
                      </div>
                      <div className="post-content">
                           <div className="post-user-info">
                            <h4>{posts.userName}</h4>
                            <i className="fas fa-check-circle"></i>
                            <span>{posts.time}</span>
                            </div>
                            <p className="post-head"> {posts.head}</p>
                            <div className="post-img"> <img src={posts.image} alt={""}/></div>
                            <p className="post-title"> {posts.title}</p>
                            <p className="post-text"> {posts.text}</p>

                            <div className="post-icons">
                            <i className="far fa-comment"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="fas fa-share-alt"></i>
                           </div>
                     </div>
</div>
                      
                               

                        </div>
                    </li>
        
</ul>

</div>
                    
    
    );
}
export default PostItem;

