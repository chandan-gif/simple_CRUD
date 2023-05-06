let form = document.getElementById("form");
let message = document.getElementById("message");
let posts = document.getElementById("posts");
let input = document.getElementById("input");

//debugger
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

// let formValidation = () => {
//     if (input.value === "") {
//       message.innerHTML = "Post cannot be blank";
//       console.log("failure");
//     } else {
//       console.log("successs");
//       message.innerHTML = "hi";
//     }
//   };


//   let data ={};
//   let acceptData=()=>{
//     data["text"]=input.value;
//   }


  let formValidation = () => {
    if (input.value === "") {
      message.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      acceptData();
    }
  };

  let createPost = () => {
    debugger
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      </span>
    </div>
    `;
    input.value = "";
  };

  let data ={};
  let acceptData=()=>{
    data["text"]=input.value;
    createPost();
  }

  let deletePost = (e) => {
    //debugger
    //<i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    e.parentElement.parentElement.remove();
  };

  let editPost=(e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  }