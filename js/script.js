function myFunction(){
    var arrEurope = ["England","Germany","France","Ireland","Poland"];
    var arrAsia = ["China","India","North Korea","Japan","Phillipines"];
    var arrNAmerica = ["Canada","Mexico","United States"];
    var arrSAmerica = ["Brazil","Chile","Peru","Colombia","Ecuador"];
    var arrAfrica = ["Nigeria","Ethiopia","Egypt","Algeria","Sudan"];
    var arrOceania = ["Australia","Papua New Guinea","New Zealand","Fiji","Timor"];
    var arrAntarctica = ["Antarctica"];

    var selectedContinent = (document.getElementById("continent").value);

    document.getElementById("countries").innerHTML = "";

    if(selectedContinent == "EU"){
        for(i=0; i<arrEurope.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrEurope[i];
        console.log(arrEurope[i]);
        selectoptions.value = arrEurope[i];
        countries.appendChild(selectoptions);
        }
    }
    else if(selectedContinent == "Asia"){
        for(i=0; i<arrAsia.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrAsia[i];
        console.log(arrAsia[i]);
        selectoptions.value = arrAsia[i];
        countries.appendChild(selectoptions);
        }
    }
    else if(selectedContinent == "NAmerica"){
        for(i=0; i<arrNAmerica.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrNAmerica[i];
        console.log(arrNAmerica[i]);
        selectoptions.value = arrNAmerica[i];
        countries.appendChild(selectoptions);
        }
    }
    else if(selectedContinent == "SAmerica"){
        for(i=0; i<arrSAmerica.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrSAmerica[i];
        console.log(arrSAmerica[i]);
        selectoptions.value = arrSAmerica[i];
        countries.appendChild(selectoptions);
        }
    }
    else if(selectedContinent == "Africa"){
        for(i=0; i<arrAfrica.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrAfrica[i];
        console.log(arrAfrica[i]);
        selectoptions.value = arrAfrica[i];
        countries.appendChild(selectoptions);
        }
    }
    else if(selectedContinent == "Oceania"){
        for(i=0; i<arrOceania.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrOceania[i];
        console.log(arrOceania[i]);
        selectoptions.value = arrOceania[i];
        countries.appendChild(selectoptions);
        }
    }
    else if(selectedContinent == "Antarctica"){
        for(i=0; i<arrAntarctica.length;i++)
        {
        var selectoptions = document.createElement('option');
        selectoptions.innerHTML = arrAntarctica[i];
        console.log(arrAntarctica[i]);
        selectoptions.value = arrAntarctica[i];
        countries.appendChild(selectoptions);
        }
    }
}