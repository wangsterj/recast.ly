var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&videoEmbeddable=true&key=${options.key}&type=video`,
    type: 'GET',
    contentType: 'application/json',
    success: (data) => {
      callback(data.items);
    },

    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed to get data', data);
    }
  });
};


export default searchYouTube;