const getMorePosts = () => {
    var that = this;
    var totalPages;

    // adding a loader
    jQuery("#loader").addClass("active");

    this.setState({ page: this.state.page + 1 });

    fetch(nexusSettings.URL.api + "/posts/?page=" + this.state.page)
        .then(function (response) {
            for (var pair of response.headers.entries()) {

                // getting the total number of pages
                if (pair[0] == 'x-wp-totalpages') {
                    totalPages = pair[1];
                }

                if (that.state.page >= totalPages) {
                    that.setState({ getPosts: false })
                }
            }
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function (results) {
            var allPosts = that.state.posts.slice();
            results.forEach(function (single) {
                allPosts.push(single);
            })
            that.setState({ posts: allPosts });

            // removing the loader
            jQuery("#loader").removeClass("active");

        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            jQuery("#loader").remove();
        });
}
