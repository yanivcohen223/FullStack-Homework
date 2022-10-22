
function SubmitButton() {
    let first_name = document.getElementById('First_box').value
    let first_len = document.getElementById('First_box').value.length
        document.getElementById('txt1').innerHTML = `first Name: = ${first_name} , length = ${first_len}`

    let second_name = document.getElementById('Second_box').value
    let second_len = document.getElementById('Second_box').value.length
    document.getElementById('txt2').innerHTML = `Last Name: = ${second_name} , length = ${second_len}`

    document.getElementById('txt3').innerHTML = `full-Name combained = ${first_name+second_name} , length = ${first_len+second_len}`

    let newstr = ""; 
    for (let i = 0; i < first_name.length; i++) {
        newstr= newstr + first_name[i] + second_name[i]
    }
    document.getElementById('txt4').innerHTML = `merged names ${newstr}`
}
