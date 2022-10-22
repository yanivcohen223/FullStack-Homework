function ColourChange() {

    const selected_option = document.getElementById('colours_op').value
    const element = document.getElementById('text_id').value
        
        if (selected_option === 'green') {
            document.getElementById('txt1').innerHTML = `${element}`
            document.getElementById('txt2').innerHTML = ``
            document.getElementById('txt3').innerHTML = ``
            document.getElementById('txt4').innerHTML = ``
        }
        else if (selected_option == 'yellow') {
            document.getElementById('txt1').innerHTML = ``
            document.getElementById('txt2').innerHTML = `${element}`
            document.getElementById('txt3').innerHTML = ``
            document.getElementById('txt4').innerHTML = ``
        }        
        else if (selected_option == 'blue') {
            document.getElementById('txt1').innerHTML = ``
            document.getElementById('txt2').innerHTML = ``
            document.getElementById('txt3').innerHTML = `${element}`
            document.getElementById('txt4').innerHTML = ``
        }
        else if (selected_option == 'red') {
            document.getElementById('txt1').innerHTML = ``
            document.getElementById('txt2').innerHTML = ``
            document.getElementById('txt3').innerHTML = ``
            document.getElementById('txt4').innerHTML = `${element}`
        }    
    }