// Search for a specified string.
function search() {
    var q = $('#query').val();
    $.ajax('https://www.googleapis.com/youtube/v3/search', {
        data: {
            part: 'snippet',
            key: 'AIzaSyDWtf-tWlRuo-AA8mHswAxTPQl-7qbWL2g',
            q: q
        },
        success: function (data) {
            //now we need call function and pass data that knows how to render above
            //thumbnail
            var newSearch = new Snippets(data, $("#results"));
        },
        error: function (XHR) {
            //display message that the user knows something went wrong on Youtube's end and couldn't return anything
            console.log(XHR);
            $("#error").append("Unable to submit search to YouTube");
        }
    });
}

//jQuery function to listen to the submit button for searching YouTube
function listenSubmit() {
    $('form').submit(function (e) {
        e.preventDefault();
        search();
    });

}
$(listenSubmit)