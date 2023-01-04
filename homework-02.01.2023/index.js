let post_button = document.getElementById("post_btn")

function get_data(){
    fetch('/company').then(response => response.json()).
    then(json => {
        console.log(json.employees);
        var tb = ""
        json.employees.forEach(e => {
            tb += `<tr><td>${e.ID}</td>
            <td>${e.fname}</td>
            <td>${e.Lname}</td>
            <td>${e.AGE}</td></tr>`
        });
        document.getElementById('data').innerHTML = tb
    })
}

function post_fnc(){
    let fname_input = document.getElementById('fname').value
    let lname_input = document.getElementById('lname').value
    let age_input = document.getElementById('age').value
    console.log(first_name +' '+ last_name +' '+ age_);

        fetch('/company', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json',
             },
             // take from inputs 
             body: JSON.stringify({
                 first_name: `${fname_input}`,
                 Last_name: `${lname_input}`,
                 AGE: age_input,
             }).then()
        })
}
