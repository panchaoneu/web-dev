const WhoToFollowListItem = (who) =>{
    return(`
        <li class="">Who To Follow</li>
              <li class="list-group-item wd-left">
                  <div class="row w-100">
                      <div class="col-3">
                          <img class="img-fluid rounded-circle" src="java.png">
                      </div>
                      <div class="col-6">
                          <div>
                              <b>Java </b><i class="fas fa-check-circle"></i>
                          </div>
                          @java
                      </div>
                      <div class="col-3 wd-btn">
                          <button class="btn btn-primary ">Follow</button>
                      </div>
                  </div>
              </li>         
        
        
        
        
        <li class="">
        
        
        
        
            ${todo.title}
            (${todo.status})
        </li>
`);
}
export default WhoToFollowListItem;

