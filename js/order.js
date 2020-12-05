
var http = new XMLHttpRequest();
http.open('GET', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
http.send();
http.onreadystatechange = function(){
    if(http.readyState === 4){
        var repo = JSON.parse(http.responseText);
        console.log(repo);

        var someData = '';
        for(var i = 0; i < repo.length; i++){
            Data += "<tr class=" + repo[i].orderStatus + ">";
            Data += "<td class='common'>" + repo[i].id + "</td>";
            Data += "<td>"+ repo[i].customerName +"</td>";
                    
            Data += "<td>" + repo[i].orderDate +"<br>"+"<span class='common'>"+ repo[i].orderTime +"<span>"+"</td>";
            Data += "<td class='common'>" + "$"+ repo[i].amount +"</td>";
            Data += "<td>" + repo[i].orderStatus +"</td>";
        }

        var table = document.getElementById('data');
        table.innerHTML = Data;
    }
}