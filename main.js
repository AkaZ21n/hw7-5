const baseURL = "https://jsonplaceholder.typicode.com";

const endpoints = {
 posts: "/posts",
 post: (id) => `/posts/${id}`
};

const getAllPosts = async () => {
  const response = await fetch(`${baseURL}${endpoints.posts}`, {
    method: 'GET',
 });
 const data = await response.json();
 console.log(data);
}
getAllPosts();


const post = {
 userId: 10,
 title: "Hello, World!",
 body: "its body"
}

const createPost = async (post) => {
 const response = await fetch(`${baseURL}${endpoints.posts}`, {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
   'Content-Type': 'application/json'
  }
 })
 const data = await response.json();
 console.log(data);
}

createPost(post);


const updatePost = async (post_id, post_obj) => {
 const response = await fetch(`${baseURL}${endpoints.post(post_id)}`, {
  method: 'PUT',
  body: JSON.stringify(post_obj),
  headers: {
   'Content-Type': 'application/json'
  }
 })
 const data = await response.json();
 console.log(data);
}

updatePost(1, post);

const deletePost = async (post_id) => {
 const response = await fetch(`${baseURL}${endpoints.post(post_id)}`, {
  method: 'DELETE'
 })
 const data = await response.json();
 console.log(data);
}

deletePost(2);