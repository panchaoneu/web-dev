const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter fa-inverse "></i>
                </a>
                
                <a class="list-group-item" href="#">
                    <i class="fas fa-home fa-inverse"></i>
                    <span class="d-none d-xl-block">Home</span>
                </a>
                
                <a class="list-group-item" href="#">
                    <i class="fas fa-hashtag fa-inverse"></i>
                    <span class="d-none d-xl-block">Explore</span>
                </a>
                
                <a class="list-group-item" href="#">
                    <i class="fas fa-bell fa-inverse"></i>
                    <span class="d-none d-xl-block">Notification</span>
                </a>
                
                <a class="list-group-item" href="#">
                    <i class="fas fa-envelope fa-inverse"></i>
                    <span class="d-none d-xl-block">Message</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fas fa-bookmark fa-inverse"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </a>
                
                <a class="list-group-item" href="#">
                    <i class="fas fa-list fa-inverse"></i>
                    <span class="d-none d-xl-block">Lists</span>
                </a>   
                
                <a class="list-group-item" href="#">
                    <i class="fas fa-user fa-inverse"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </a>  
                
                <a class="list-group-item" href="#">
                    <i class="fab fa-comment-dots"></i>
                    <span class="d-none d-xl-block">More</span>
                </a>  
                
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
