class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0],
      videoList: exampleVideoData,
      query: 'cute dogs videos',
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.onListItemClick = this.onListItemClick.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.onChange = _.debounce(this.onChange.bind(this), 500);

  }

  componentDidMount() {
    this.props.searchYouTube({query: this.state.query, max: this.state.max, key: this.state.key}, this.searchUpdate);
  }

  onListItemClick(video) {
    this.setState({
      video: video
    });
  }

  onChange(input) {
    this.setState({
      query: input
    });
    this.props.searchYouTube({query: this.state.query, max: this.state.max, key: this.state.key}, this.searchUpdate);
  }

  searchUpdate(videoData) {
    this.setState({
      video: videoData[0],
      videoList: videoData
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search onChange = {this.onChange}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.videoList} clicks={this.onListItemClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
export default App;