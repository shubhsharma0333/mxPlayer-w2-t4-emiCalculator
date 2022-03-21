function calculateEmi(){
    let principleAmt = parseInt(document.getElementById("pa").value);
    let intrestRate = parseInt(document.getElementById("ir").value)
    let tenure =parseInt(document.getElementById("tenure").value)
    let rate= intrestRate/1200;
    let part = Math.pow((1+rate), tenure*12);

    let emi = Math.round(principleAmt*rate*part/(part - 1));
    document.getElementById("emi").innerText= "EMI/month: "+emi;
    document.getElementById("emi1").innerText= "Total Pay: "+emi*12*tenure;

}

function yearly(){
    let principleAmt = parseInt(document.getElementById("pa").value);
    let intrestRate = parseInt(document.getElementById("ir").value)
    let tenure =parseInt(document.getElementById("tenure").value)
    let rate= intrestRate/1200;
    let part = Math.pow((1+rate), tenure*12);

    let emi = Math.round(principleAmt*rate*part/(part - 1));
    let amtPaid = 0;
    let amtRemaining = 0;
    let table = document.getElementById("tables");
   
    var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }

    for(let i = 1; i<= tenure; i++){
        
        let row = table.insertRow(i)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        amtPaid = emi*12*i;
        amtRemaining = emi*12*tenure - amtPaid;
        cell1.innerHTML= i+"st year";
        cell2.innerHTML= emi *12;
        cell3.innerHTML =amtRemaining;
        console.log(amtRemaining)
    }
    
}

function monthly(){
    let principleAmt = parseInt(document.getElementById("pa").value);
    let intrestRate = parseInt(document.getElementById("ir").value)
    let tenure =parseInt(document.getElementById("tenure").value)
    let rate= intrestRate/1200;
    let part = Math.pow((1+rate), tenure*12);

    let emi = Math.round(principleAmt*rate*part/(part - 1));
    let amtPaid = 0;
    let amtRemaining = 0;
    let table = document.getElementById("tables");
   
    var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }

    for(let i = 1; i<= tenure*12; i++){
        
        let row = table.insertRow(i)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        amtPaid = emi*i;
        amtRemaining = emi*12*tenure - amtPaid;
        cell1.innerHTML= i+"st Month";
        cell2.innerHTML= emi ;
        cell3.innerHTML =amtRemaining;
        console.log(amtRemaining)
    }
}