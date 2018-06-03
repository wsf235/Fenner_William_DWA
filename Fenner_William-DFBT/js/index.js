/**
 * Created by MasterAnseen on 5/29/18.
 */
const form_builder = (attach, ...form_elements) => {

    //Create a form element
    let form_string = `<form>`;

    //Loop through all form elements from an array
    for(let i=0; i<form_elements.length; i++){

        //Create an element based on the array input.
        //input will create a text based input field
        //button will create a button based on the type specified, etc
        if(form_elements[i][0] == "input"){
            form_string += `<${form_elements[i][0]} type="${form_elements[i][1]}" />`;
        }
        else if(form_elements[i][0] == "label"){
            form_string += `<${form_elements[i][0]} for=${form_elements[i][1]}>${form_elements[i][2]}</${form_elements[i][0]}>`;
        }
        else if(form_elements[i][0] == "textarea"){
            form_string += `<${form_elements[i][0]} />`;
        }
        else if(form_elements[i][0] == "button"){
            form_string += `<${form_elements[i][0]} type=${form_elements[i][1]}>${form_elements[i][2]}</${form_elements[i][0]}>`;
        }
        else if(form_elements[i][0] == "select"){
            form_string += `<${form_elements[i][0]}>`;

            for(let j=1; j<form_elements[i].length; j++){
                form_string += `<option value=${form_elements[i][j]}>${form_elements[i][j]}</option>`;
            }

            form_string += `</${form_elements[i][0]}>`;
        }
        else{
            form_string += `Incorrect format in form at line ${i}.`;
        }

        form_string += `</br>`;

    }

    //Close the form element
    form_string += `</form>`;

    if(attach == ""){
        //If no particular element is specified to add this to...
        document.body.innerHTML += form_string;
    }
    else{
    }

};

form_builder("",["label", "input_label", "Hello Label"],["input", "text"], ["select", "open", "close", "left", "right"]);


