const WhoToFollowListItem = (who) =>{
    return(`
    <ul class="list-group">
              <li class="list-group-item wd-left">
                  <div class="row w-100">
                      <div class="col-3">
                          <img class="img-fluid rounded-circle" src="${who.avatarIcon}">
                      </div>
                      <div class="col-6">
                          <div>
                              <b>${who.userName}</b><i class="fas fa-check-circle"></i>
                          </div>
                          ${who.handle}
                      </div>
                      <div class="col-3 wd-btn">
                          <button class="btn btn-primary ">Follow</button>
                      </div>
                  </div>
              </li>          
    
</ul>
        
        
`);
}
export default WhoToFollowListItem;

