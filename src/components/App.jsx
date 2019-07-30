class App extends React.Component {
  constructor(props) {
    super(props);

    this.one = "1";
    this.state={};
  }
    func
  // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
    onListItemClick(video) {
      this.func(App.one);
      return App.one;

      // this.setState({
      //   done: !this.state.done
      // });
    }

    render() {
      // Making the style conditional on our `state` lets us
      // update it based on user interactions.
      var style = {
        fontWeight: this.state.done ? 'bold' : 'normal'
      };

      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[2]}/></h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><em>videoList</em><VideoList videos={exampleVideoData} clicks={this.onListItemClick}/></h5></div>
            </div>
          </div>
        </div>
      );
    }
}


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video = {exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em><VideoList videos = {exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
export default App;
