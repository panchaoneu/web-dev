import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        
        <div class="col-9 col-lg-6 wd-left">${ExploreComponent()}</div>

   
    <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
         </div>
             ${WhoToFollowList()}
         </div>
    `);
})($);

