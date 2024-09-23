document.getElementById('container-btn').addEventListener('click',function(){
    window.location.href = './home.html'
})

function getInputFieldId(id){
    return  parseFloat(document.getElementById(id).value)
  
}
let  mainBalance = parseFloat(document.getElementById('mainBalance').innerText)
// when click button 1 
document.getElementById('donate-btn1').addEventListener('click',function(){
    const value1 = getInputFieldId('collect-value1')
    const moneyReplace = parseFloat(document.getElementById('add-money-1').innerText);
    const newBalance = moneyReplace + value1
    document.getElementById('add-money-1').innerText = newBalance

   
    mainBalance = mainBalance -value1
    document.getElementById('mainBalance').innerText = mainBalance
   
})

// when click button 2
document.getElementById('donate-btn2').addEventListener('click',function(){
    const value2 = getInputFieldId('collect-value2')
    const moneyReplace = parseFloat(document.getElementById('add-money-2').innerText);
    const newBalance = moneyReplace + value2
    document.getElementById('add-money-2').innerText = newBalance
     mainBalance = mainBalance -value2
     document.getElementById('mainBalance').innerText = mainBalance
})
// when click button 3
document.getElementById('donate-btn3').addEventListener('click',function(){
    const value3 = getInputFieldId('collect-value3')
    const moneyReplace = parseFloat(document.getElementById('add-money-3').innerText);
    const newBalance = moneyReplace + value3
    document.getElementById('add-money-3').innerText = newBalance
    
    mainBalance = mainBalance - value3
    document.getElementById('mainBalance').innerText = mainBalance
})