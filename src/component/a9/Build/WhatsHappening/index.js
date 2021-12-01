import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../../../services/twitterServices";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });
    }
    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tbody>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'../../../image/happening.jpg'}
                             alt={""}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="/"><i className="far fa-image me-3"></i></a>
                            <a href="/"><i className="far fa-analytics me-3"></i></a>
                            <a href="/"><i className="far fa-smile me-3"></i></a>
                            <a href="/"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default WhatsHappening;