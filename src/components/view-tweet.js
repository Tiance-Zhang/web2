import React, { Component } from 'react';
import './view-tweet.css';

class ViewTweet extends Component {
  
  constructor(state) {
    super(state);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    
    // I wonder if this stuff here is any kind of hint... 🤔 
    this.state = { likeCount: 0 };
    console.log("This got passed into ViewTweet. I wonder why?", this.props.tweet);
  }
  
  render() {
    return <div className="view-tweet-component">
      <div className="tweet-content">
        {/* TASK 2: Well, this explains the whole "The text of the tweet" thing. What can we do about that? */}
        <p>"The text of the tweet"</p>
        <p className="author-info">by <strong>@{this.props.tweet.author}</strong></p>
      </div>
      
      {/* TASK 2: Here's part of the "likes" problem. The ViewTweet component is hard-coded to always display 0 likes. */}
      <div className="likes">{this.state.likecount}</div>
      
      <input className="like-button" type="button" value="Like" onClick={this.handleLikeClick}></input>
    </div>;
  }
  
  handleLikeClick() {
    
    
    this.setState({likeCount:  this.state.likeCount+1, recentLikeTime: new Date()});
    console.log("like clicked");
    /*
      TASK 2
      Here's another big issue. When the like button is clicked, nothing but a log statement runs! 
      That can't be right. Write some code here to respond appropriately. When you're done here and
      have addressed the problem in render() above, you should see the like count increase by 1 every time
      you click the button.
    */
    console.log("Like clicked!");
  }
}

export { ViewTweet }