'use strict';

var Snippets = function (data, container) {
    this.buildThumbnails = buildThumbnails.bind(this)
    this.container = container;
    buildResults.call(this, data)
}

function buildThumbnails(data) {
    var thumbnailRender = "<section ><h2 class='results-section'>Results Section</h2></section>";
    data.items.forEach(function (element) {
        (element.id.channelId) ? thumbnailRender += "<div class='thumbnail'><a target='_blank' href='https://www.youtube.com/channel/" + (element.id.channelId) + "'><img src='" + element.snippet.thumbnails.medium.url + "'></a></div>":
            thumbnailRender += "<div class='thumbnail'><a target='_blank' href='https://www.youtube.com/watch?v=" + (element.id.videoId) + "'><img src='" + element.snippet.thumbnails.medium.url + "'></a></div>";
    });

    return thumbnailRender;
}

function buildResults(data) {
    this.container.empty();
    var results = this.buildThumbnails(data);
    this.container.append(results);
}