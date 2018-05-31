/**
 * Created by MasterAnseen on 5/29/18.
 */

function form_builder(attach, ...form_elements){

    //Create a form element
    var form = document.createElement('form');

    //Loop through all form elements from an array
    for(var i=0; i<form_elements.length; i++){

        //Create an element based on the array input.
        //input will create a text based input field
        //button will create a button based on the type specified, etc
        if(form_elements[i][0] == "input"){
            form.innerHTML += "<"+form_elements[i][0]+" type='"+form_elements[i][1]+"' />";
        }
        else if(form_elements[i][0] == "label"){
            form.innerHTML += "<"+form_elements[i][0]+" for='"+form_elements[i][1]+"'>"+form_elements[i][2]+"</"+form_elements[i][0]+">";
        }
        else if(form_elements[i][0] == "textarea"){
            form.innerHTML += "<"+form_elements[i][0]+" />";
        }
        else if(form_elements[i][0] == "button"){
            form.innerHTML += "<"+form_elements[i][0]+" type='"+form_elements[i][1]+"'>"+form_elements[i][2]+"</ "+form_elements[i][0]+">";
        }
        else if(form_elements[i][0] == "select"){
            form.innerHTML += "<select>";

            for(var j=1; j<form_elements[i].length; j++){
                form.innerHTML += "<option value='"+form_elements[i][j]+"'>"+form_elements[i][j]+"</option>";
            }

            form.innerHTML += "</select>";
        }
        else{
            form.innerHTML += "Incorrect format in form at line " + i + ".";
        }

    }

    if(attach == ""){
        //If no particular element is specified to add this to...
        document.body.appendChild(form);
        //console.log(form.innerHTML);
    }
    else{
        //document.getElementsByName(attach) += form;
    }

}


form_builder("",["label", "input_label", "Hello Label"],["input", "text"], ["select", "open", "close", "left", "right"]);


