import PostList from "../PostSummaryList/PostList.js";

const ExploreComponent = () => {
    return(`
            <div class="row  wd-search-margin">
                <div class="col-10 wd-search-bar">
                <i class="fas fa-search wd-search-icon"></i>
                <input class="form-control wd-field" placeholder="Search Twitter">
                </div>
            </div>
           
           <ul class="nav nav-tabs wd-nav wd-search-margin">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="News.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="Entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <div>
         ${PostList()}
         </div>
        
        
    `);
}
export default ExploreComponent;
