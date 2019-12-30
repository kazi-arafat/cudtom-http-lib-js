let http = new easyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(JSON.parse(posts));
// 	}
// });

// Making Data

post = {
    title : "Custom Post Title",
    body : "Custom post Body."
}

// create a Post using POST request

// http.post("https://jsonplaceholder.typicode.com/posts",post,function (err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }

// });

// Update a post using PUT request
// http.put('https://jsonplaceholder.typicode.com/posts/10',post,function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);

//     }
// });

// Delete a post using DELETE request
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});