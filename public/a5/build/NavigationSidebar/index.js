const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
            <a class="list-group-item" href="#"><i class="fab fa-twitter fa-inverse"></i></a>
            <a class="list-group-item ${active === 'home'? 'active':''}" href="../../HomeScreen/ExploreScreen/explore.html">
                <div class="row">
                    <div class="col-2"><i class="fas fa-home fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Home</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'explore'? 'active':''}" href="../ExploreScreen/explore.html">
                <div class="row">
                    <div class="col-2"><i class="fas fa-hashtag fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Explore</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'notifications'? 'active':''}" href="#">
                <div class="row">
                    <div class="col-2"><i class="fas fa-bell fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Notification</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'messages'? 'active':''}" href="#">
                <div class="row">
                    <div class="col-2"><i class="fas fa-envelope fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Message</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'bookmarks'? 'active':''}" href="#">
                <div class="row">
                    <div class="col-2"><i class="fas fa-bookmark fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Bookmarks</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'lists'? 'active':''}" href="#">
                <div class="row">
                    <div class="col-2"><i class="fas fa-list fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Lists</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'profile'? 'active':''}" href="#">
                <div class="row">
                    <div class="col-2"><i class="fas fa-user fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> Profile</div>
                </div>
            </a>

            <a class="list-group-item ${active === 'more'? 'active':''}" href="#">
                <div class="row">
                    <div class="col-2"><i class="fas fa-comment-dots fa-inverse"></i></div>
                    <div class="d-none d-xl-block col-xl-10"> More</div>
                </div>
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
