import { makeObservable, observable, action} from "mobx";

class Store {
  
  user={}
  album={}
  posts = [];
  albums = [];
  constructor() {
    makeObservable(this, {
        user: observable,
        album:observable,
        posts:observable,
        setUser: action,
        setNewComment:action,
        setPosts:action,
        setAlbums:action,
        setAlbum:action
    }) 
 
}
setAlbums = (user) => {
 
    fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`,)
    .then(response => response.json())
    .then(data => {
      for(let item of data){
        fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`,)
        .then(response => response.json())
        .then(comments => {
          item.comments=comments
          this.setPosts(item)
        });
       }
    
    });
   
      
};
  setUser = (user) => {
    this.user = user;
  }
  setAlbum = (album) => {
    this.album = album;
  }
  setUsers = (user) => {
    this.user = user;
  }
  setNewComment = (value,post,user) => {
   
    this.posts.forEach((item)=>{
      if(item.id == post.id){
        item.comments.push({
            "postId": post.id,
            "id": item.comments.length+1,
            "name": user.name,
            "email": user.email,
            "body": value.description
          
        })
      }
    })
  }
  setPosts = (data) => {
    this.posts = [...this.posts,data];
  };
 
 
}

export default new Store();