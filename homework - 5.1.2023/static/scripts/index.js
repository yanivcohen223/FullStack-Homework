

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
                if(Object.getOwnPropertyNames(json).length > 0) {
                $('#data').html(`
                    <tr><td>${json.id}</td>
                    <td>${json.updateat}</td>
                    <td>${json.name}</td>
                    <td>${json.date}</td>
                    <td>${json.courseid}</td></tr>
                `)
            }}).catch(err => console.log(err))
                
            
}

async function insert_post(){
    let date_ = new Date()
const new_test = {
        updateat: date_,
        name: document.getElementById('insert_name').value,
        date: date_,
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
            
        }).then(response => response.json()).then(response => console.log( response , 'added')).catch(err => console.log(err))

        get_all()
    }

async function update_put(){
    let date_ = new Date()
    let id = document.getElementById('update_id').value
        const update_test = {
            updateat: date_,
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
    get_all()
    let id = document.getElementById('delete_id').value
         fetch(`/test/${id}`, {
             method: 'DELETE',
             headers: {
                 'Accept': 'application/json',
                 'Content-type': 'application/json'
             }})
    
}