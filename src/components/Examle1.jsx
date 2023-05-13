import React, { Component } from 'react';

import videos from '../videos.json';
import publication from '../publication.json';
import { VideoList } from 'components/VideoList/VideoList';
import { Player } from 'components/Player/Player';
import { Reader } from 'components/Reader/Reader';

export class Example1 extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({
      selectedVideo: link,
    });
  };

  render() {
    return (
      <>
        <div style={{ padding: 24 }}>
          <h1>Selected video: {this.state.selectedVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={this.state.selectedVideo} />
        </div>
        <Reader items={publication} />
      </>
    );
  }
}
