/**
 * Created by MasterAnseen on 5/31/18.
 */
// --- Form Item Types ---
// Label
const label = ({ id = '', display = '', target = '' }) => {

    return `<label id="${id}" for="${target}">${display}</label>`
};


// Select Box
const select = ({ id = '', options = [] }) => {

    let selectOptions = '';

    // iterate over each select box option
    options.forEach(({ value = '', display = '' }) => {

        selectOptions += `<option value="${value}">${display}</option>`
    });

    return `<select id="${id}">${selectOptions}</select>`
};


// Input (Text & Submit)
const input = ({ type = '', id = '', display = '' }) => {

    return `<input type="${type}" id="${id}" value="${display}" placeholder="${display}">`
};


// --- Form Generator ---
const generateForm = formItems => {
    return new Promise((resolve, reject) => {

        // approved form item types
        // --- current list of approved form items
        // --- all other types reject as error
        const approvedTypes = ['label', 'select', 'text', 'submit'];

        // form body 
        // --- updated by looping formItems
        // --- added to full form and resolved
        let formBody = '';

        // iterate over form item objects
        formItems.forEach(formItem => {

            const { type } = formItem;

            // reject errors
            // --- if item is not in approved list
            // --- reject with error target & message
            if (!approvedTypes.includes(type)) {

                return reject({
                    target: type,
                    message: `${type} is not a supported form item`
                })
            }

            // concatenate approved elements form body
            formBody += type === 'label' ? label(formItem) : '';
            formBody += type === 'select' ? select(formItem) : '';
            formBody += type === 'text' || type === 'submit' ? input(formItem) : '';
        });

        // if all items are approved
        // --- resolve successful form string
        resolve(`<form>${formBody}</form>`)
    })
};


module.exports = generateForm;