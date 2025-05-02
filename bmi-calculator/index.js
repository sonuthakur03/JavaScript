const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')
    console.log(weight , height)
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `enter valid height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `enter valid weight ${weight}`
    } else {
     let res = (weight / ((height*height)/10000)).toFixed(2);
     if (res < 18.6) {
         result.innerHTML = `${res} <br> You are under weight`
     }else if ( res > 18.6 && res < 24.9){
         result.innerHTML = `${res} <br> You are normal weight`
     } else{
         result.innerHTML = `${res} <br> You are over weight`
     }
        
    }
})