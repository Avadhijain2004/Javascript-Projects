const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const result= document.querySelector('.result')

    if (height === '' || height<0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    }
    else if (weight === '' || weight<0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    }
    else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)
       if (bmi<18.6) {
        result.innerHTML = `<span>BMI Index is ${bmi}<br><br>And you are underweight</span>`
       }
       else if (bmi>=18.6 && bmi<=24.9) {
        result.innerHTML = `<span>BMI Index is ${bmi}<br><br>Your weight is normal</span>`
       }
       else if (bmi>24.9) {
        result.innerHTML = `<span>BMI Index is ${bmi}<br><br>And you are overweight</span>`
       }
    }
})