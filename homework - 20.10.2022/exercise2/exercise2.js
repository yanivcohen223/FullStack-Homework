const list1 = []

function PushButton() {
    
    let number = document.getElementById('First_box').value

        if (number > 0) {
            list1.push(number)

        }
        else if (number < 0){
            list1.unshift(number)
        }
        else if (number == 0) { 
            let length = list1.length;
             for(let i = 0; i < length; i++) {
                list1.pop();
            }
            }
            
        
        document.getElementById('txt1').innerHTML = `${list1}`
}


function CountButton() {
    
    let number = parseInt(document.getElementById('First_box').value);
    let counter = 0;
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] == number) {
            counter++;
        }
    }
    document.getElementById('txt2').innerHTML = ` the number ${number} shows ${counter} times in ${list1} `
}