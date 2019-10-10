var parseLateSwitch = (value) =>{
    if(value){return "Hubo Accidente"};
    return "No hubo accidente";
};

function addRow(event,date,accident,tBody){
    var newRow=document.createElement("tr");

    newRow.innerHTML = `
    <td>${date}</td>
    <td>${event}</td>
    <td>${accident}</td>`

    tBody.appendChild(newRow);
};

window.onload = function(){

    var submit_btn = document.querySelector("#submit_btn");
    var nombre_field = document.querySelector("#nombre_field");
    var event_field = document.querySelector("#event_field");
    var date_field = document.querySelector("#date_field")
    var accident_switch = document.querySelector("#accident_switch");
    var tBody = document.querySelector("#table_body");

    submit_btn.addEventListener("click", () =>{
        var event = event_field.options[event_field.selectedIndex].text;
        var accident= parseLateSwitch(accident_switch.checked);
        var date = date_field.value;

        addRow(event,date,accident,tBody);
    });
}