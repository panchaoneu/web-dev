const PostItem = (posts) => {
    return (`
<div>
            <ul>
            <li class="list-group-item ">
                 <div class="row">
                 <div class="post">
                 
                 <div class="user-avatar">
                           <img src="${posts.profile}">
                      </div>
                      <div class="post-content">
                           <div class="post-user-info">
                            <h4>${posts.userName}</h4>
                            <i class="fas fa-check-circle"></i>
                            <span>${posts.time}</span>                   
                            </div>
                            <p class="post-head"> ${posts.head}</p>
                            <div class="post-img"> <img src="${posts.image}"></div>
                            <p class="post-title"> ${posts.title}</p>
                            <p class="post-text"> ${posts.text}</p>

                            <div class="post-icons">
                            <i class="far fa-comment"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="far fa-heart"></i>
                            <i class="fas fa-share-alt"></i>
                           </div>
                     </div>
</div>
                      
                               

                        </div>
                    </li>
        
</ul>

</div>
                    
    
    `);
}
export default PostItem;

