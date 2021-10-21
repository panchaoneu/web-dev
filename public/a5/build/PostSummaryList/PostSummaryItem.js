const PostSummaryItem = (posts) => {
    return(`
            <ul>
            <li class="list-group-item wd-left">
                        <div class="row wd-border">
                            <div class="col-10">
                                <h5 class="wd-note">${posts.topic}</h5>
                                <h4 class="wd-news-title">${posts.userName} <span><i class="fas fa-check-circle"></i></span> <span>${posts.time}</span></h4>
                                <p class="wd-news-title">${posts.title}</p>
                                <p class="wd-note">${posts.tweets}</p>

                            </div>
                            <div class="col-2">
                                <img class="img-fluid rounded" src="${posts.image}">
                            </div>
                        </div>
                    </li>
        
</ul>
                    
    
    `);
}
export default PostSummaryItem;


