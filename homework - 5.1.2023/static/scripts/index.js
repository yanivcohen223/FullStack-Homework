function get_all(){
    fetch('/test').then(response => response.json()).
            then(json => {
                console.log(json.tests);
                var tb = ""
                json.tests.forEach(e => {
                    tb += `<tr><td>${e.id}</td>
                           <td>${e.updateat}</td>
                           <td>${e.name}</td>
                           <td>${e.date}</td>
                           <td>${e.courseid}</td></tr>`
                });
                document.getElementById('data').innerHTML = tb
            })
    
}


function get_by_id(){
    let test_id = document.getElementById('get_by_id').value
    fetch(`/test/${test_id}`).then(response => response.json()).
            then(json => {
                console.log(json);
                $('#data').append(`
                    <tr><td>${json.id}</td>
                    <td>${json.updateat}</td>
                    <td>${json.name}</td>
                    <td>${json.date}</td>
                    <td>${json.courseid}</td></tr>
                `)
            })
                
            
}

async function insert_post(){
const new_test = {
        updateat: 'now()',
        name: document.getElementById('insert_name').value,
        date: 'now()',
        courseid: parseFloat(document.getElementById('insert_result').value),
        }
        const result = await fetch('/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            // take from inputs 
            body: JSON.stringify(new_test)
            
        }).then(console.log('added'))

        get_all()
    }

async function update_put(){
    let id = document.getElementById('update_id').value
        const update_test = {
            updateat: 'now()',
            name: document.getElementById('update_name').value,
            courseid: parseFloat(document.getElementById('update_result').value)
        }
    const result = await fetch(`/test/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            // take from inputs 
            body: JSON.stringify(update_test)
        })
        get_all()
    }



function delete_by_id(){
    let id = document.getElementById('delete_id').value
         fetch(`/test/${id}`, {
             method: 'DELETE',
             headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
             }}).then(console.log('deleted'))
}