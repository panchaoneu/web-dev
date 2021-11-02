import React from "react";
const WhoToFollowListItem = (
    {
        who=
{   avatarIcon: '../../../image/java.png', userName: 'Java ', handle: 'Java',}


    }) =>{
    return(
    <ul className="list-group">
              <li className="list-group-item wd-left">
                  <div className="row w-100">
                      <div className="col-3">
                          <img className="img-fluid rounded-circle" src={who.avatarIcon} width="45"/>
                      </div>
                      <div className="col-6">
                          <div>
                              <b>{who.userName}</b><i className="fas fa-check-circle"></i>
                          </div>
                          @{who.handle}
                      </div>
                      <div className="col-3 wd-btn">
                          <button className="btn btn-primary ">Follow</button>
                      </div>
                  </div>
              </li>          
    
</ul>
        
        
);
}
export default WhoToFollowListItem;

