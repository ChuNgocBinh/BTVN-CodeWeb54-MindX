fetch('http://localhost:9000/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
// result
// lỗi 
//index.html:1 Access to fetch at 'http://localhost:9000/posts' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
