let add_btn = document.getElementById("btn");
let container = document.getElementById("container");
let adding_inputs = document.getElementById("adding_inputs");
let create_word = document.getElementById("create_word");
let word = document.getElementById("word");
let spelling = document.getElementById("spelling");
let sound_source = document.getElementById("sound_source");
let table = document.getElementById("table");
let adding = document.getElementById("adding");
let btn = document.getElementById("btn");
let source_p = document.getElementById("source_p");
let Password_input = document.getElementById("Password_input");
let password_btn = document.getElementById("password_btn");
let password_div = document.getElementById("password_div");
let sure_message = document.getElementById("sure_message");
let wrong_password = document.getElementById("wrong_password");
let cancel_word = document.getElementById("cancel_word");
let password_cancel = document.getElementById("password_cancel");


let password = "3791"





let data;;
if (localStorage.Vocabulers != null) {
    data = JSON.parse(localStorage.Vocabulers)
}else {
    data = []
}

// create_word.onclick = function () {
//     let data_push = {
//         word:word.value,
//         spelling:spelling.value,
//         meaning:meaning.value,
//         sound_src:sound_source.value
//     }
//     data.push(data_push)
//     localStorage.setItem("Vocabulers"  , JSON.stringify(data))
//     console.log(data_push);
//     show_data()
//     display()
//     clear()
   
// }

create_word.onclick = function () { 
    ifSource()
}

// Cancel
cancel_word.onclick = function () {
    adding.style.display = "none"
}
password_cancel.onclick = function () {
    password_div.style.display = "none"
}
//=====================
let data_push;
let secound_data;
if ( data != null) {
    secound_data = data
}else {
    secound_data = []
}
// ====================
function ifSource() {
    if (sound_source.value.includes("http") === false) {
        source_p.style.display = "block"
        }else {
            create_word.onclick = function () {
                    data_push = {
                    word:word.value,
                    spelling:spelling.value,
                    meaning:meaning.value,
                    sound_src:sound_source.value
                }        
                data.push(data_push)
                tbody.innerHTML  = data_push
                localStorage.setItem("Vocabulers"  , JSON.stringify(data))
                console.log(data_push);
                show_data()
                display()
                clear()
                secound_data.push(data_push)
                console.log(secound_data)
                // data.push(secound_data)
            }
            
            // let secound_data = [data_push];
        }
        // secound_data = data

        // console.log(sound_source.value.includes("http"))
        // if (sound_source.includes("http") = false){
        //     console.log("Not Media")
        // }
    }
// ifSource()
// Display 
function display() {
    adding.style.cssText = 'display:none'
}
btn.onclick = function appear() {
    password_confirm()
    sure_message.innerHTML = "Enter Password To Add New Word";
    password_btn.onclick = function ()  {if(Password_input.value === password ) { 
        adding.style.cssText = 'display:block';
        password_div.style.display = "none"
        Password_input.value = ""
      } else {
        wrong_password.style.display = "block"
    }
  }
}
let tbody = document.getElementById("tbody");
function show_data() {
    let table = ''
    for(let i = 1 ; i < secound_data.length ; i++) {
        table += `
        <tr>
        <td id="indexs">${i}</td>
        <td>${secound_data[i].word}</td>
        <td>${secound_data[i].spelling}</td>
        <td>${secound_data[i].meaning}</td>
        <td id="add-audio"><audio controls>
        <source src="${secound_data[i].sound_src}" type="audio/mp3"> </audio></td>
        <td id="du_td"><button onclick="update_item(${i})" class='du_btn' id="update_btn">Update</button></td>
        <td id="du_td"><button onclick="delete_item(${i})" class='du_btn' id="delete_btn">Delete</button></td> 
        </tr>
        `
        ;
        // console.log(table)
    }
    tbody.innerHTML = table
}
// let index_num = document.getElementById("index_num");
// console.log(index_num)
// index_num.style.cssText = "width = 10px";
show_data()

let delete_btn = document.getElementById("delete_btn")
// console.log(delete_btn)
function password_confirm() {
    password_div.style.display = "block"
}

function delete_item(i) {
   password_confirm()
   sure_message.innerHTML = "Are You Sure You Want To Delete This? (" + data[i].word + ")";
    password_btn.onclick = function password_Condition() { if(Password_input.value === password ) { 
    data.splice(i,1)
    localStorage.Vocabulers = JSON.stringify(data) 
    show_data()
    password_div.style.display = "none"
    Password_input.value = ""
    }else {
        wrong_password.style.display = "block"
    }
}
    // password_confirm.onclick = function (i) {
    //     if(Password_input.value === password ) { 
    //         data.splice(i,1)
    //         localStorage.Vocabulers = JSON.stringify(data) 
    //         show_data()
    //         }
    // }
}

// Claer 
function clear() {
    word.value ='';
    spelling.value ='';
    meaning.value ='';
    sound_source.value ='';
    source_p.style.display = "none"
}
// Update

function update_item(i) {
     adding.style.cssText = 'display:block';
     word.value = data[i].word;
     spelling.value = data[i].spelling;
     meaning.value = data[i].meaning;
     sound_source.value = data[i].sound_src;
    
}