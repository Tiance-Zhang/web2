import React, { Component } from "react";
import { SiteBanner } from './components/site-banner';
import { NewTweet } from './components/new-tweet';
import { ViewTweet } from './components/view-tweet';
import { TweetsService } from './services/tweets-service';

import './App.css';

class App extends Component {
  constructor(state) {
    super(state);
    
    this.state = { tweets: [] };
  }
  
  componentDidMount() {
    this._loadTweets();
  }
  
  render() {
    const tweetElements = this.state.tweets.map(tweet => <ViewTweet key={tweet.id}>hi</ViewTweet>);
    
    return (
      <div className="app">
        <SiteBanner bannerText="The BEST Twitter" />
        <section className="content">
          <NewTweet onTweetPosted={this._loadTweets.bind(this)}></NewTweet>
          <hr />
          <div class="recent-tweets">
            <h1>Recent tweets</h1>
            {tweetElements}
          </div>
        </section>
      </div>
    );
  }
  
  _loadTweets() {
    const tweetsService = new TweetsService();
    const tweets = tweetsService.getTweets();
    this.setState({ tweets });
  }
}

export default App;
