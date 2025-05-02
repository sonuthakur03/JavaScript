function submitForm(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Retrieve the entered username
  let username = document.getElementById("usernameInput").value;


/* requesting api varibale stored */
const requestUrl = `https://api.github.com/users/${username}`;

/* requesting api */
const xhr = new XMLHttpRequest();

/* giving the state of api with url */
xhr.open('GET', requestUrl)

/* onreadystatechange runs when the state of api si changed */
xhr.onreadystatechange = function(){
  
  /* readyState shows the state of api */
  console.log(xhr.readyState);
  
  /* if readyState is 4 it means it is done */
  if(xhr.readyState === 4){
    
    /* responseText shows the response received in the form of strings */
    console.log(this.responseText);
    
    /* changing string response in json object */
    let data = JSON.parse(this.responseText);
    
    
    /* accessing different values of api and assigning the value to the DOM */
    document.querySelector('#followers').innerHTML= `${data.followers}`
    
    document.querySelector('#following').innerHTML=
    `${data.following}`
    
    document.querySelector('img').setAttribute("src",`${data.avatar_url}`)
    
    document.querySelector('#name').innerHTML = `${data.login}`
  }
}

/* sending request to the api */
xhr.send()



}
