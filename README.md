# Fenner_William_DWA

## Dynamic Form Builder Tool
### a.k.a. The DFBT


Upon calling the form_builder function, the user needs to specify a location to append the form to. Otherwise the form will be appended to the body of the document.

Each array specified after the add a particular form function to said form.

Example: 

form_builder("",
["label", "input_label", "Hello Label"],
["input", "text"], 
["select", "open", "close", "left", "right"]);
