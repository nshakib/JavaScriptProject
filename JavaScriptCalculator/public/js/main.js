function display(val){
    document.getElementById('textvalue').value +=val
}

function evaluate(){
    let x = document.getElementById('textvalue').value
    let y = eval(x)
    document.getElementById('textvalue').value = y
}

function clr(){
    document.getElementById('textvalue').value = ""
}