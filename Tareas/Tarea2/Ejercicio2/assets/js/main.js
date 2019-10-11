var parseLateSwitch = (value) =>{
    if(value){return "Si"};
    return "No";
};

function addRow(event,date,time,accident,tBody){
    var newRow=document.createElement("tr");

    newRow.innerHTML = `
    <td>${date}</td>
    <td>${time}</td>
    <td>${event}</td>
    <td>${accident}</td>`

    tBody.appendChild(newRow);
};

var journal=[];

function addEntry(date,event, accident) {
    journal.push({date,event, accident});
}

window.onload = function(){

    var submit_btn = document.querySelector("#submit_btn");
    var event_field = document.querySelector("#event_field");
    var date_field = document.querySelector("#date_field")
    var accident_switch = document.querySelector("#accident_switch");
    var time_field = document.querySelector("#time_field");
    var tBody = document.querySelector("#table_body");


    submit_btn.addEventListener("click", () =>{
        var event = event_field.options[event_field.selectedIndex].text;
        var accident= parseLateSwitch(accident_switch.checked);
        var date = date_field.value;
        var time= time_field.value;

        addRow(event,date,time,accident,tBody);

        var flag=false;
        for(let elemento of journal){
            if(date===elemento.date){
                elemento.event= elemento.event+","+event;
                flag=true;
                if(elemento.accident != true){
                    elemento.accident = accident;
                }
            }
        }
        
        if(!flag){
            addEntry(date,event,accident);
        }
    });
}