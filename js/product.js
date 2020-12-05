var http = new XMLHttpRequest();
http.open('GET', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
http.send();
http.onreadystatechange = function(){
    if(http.readyState === 4){
        var a = JSON.parse(http.responseText);
        console.log(a);

        var info = '';
        for(var i = 0; i < a.length; i++){
            var elementName = '';
            if(a[i].stock > 100){
                elementName = 'inStock';
            } else {
                elementName = 'outStock';
            }

            if(Date.parse(a[i].expiryDate) < Date.now()){
                elementName = `${elementName} not Expired`;
            } else {
                elementName = `${elementName} expired`;
            }

            info += `<tr class="${elementName}">`;
            info += "<td class='common'>" + a[i].id + "</td>";
            info += "<td>"+ response[i].medicineName +"</td>";
                    
            info += "<td class='common'>" + a[i].medicineBrand + "</td>";
            info += "<td>" + response[i].expiryDate + "</td>";
            info += "<td class='common'>" + "$"+ a[i].unitPrice +"</td>";
            info += "<td class='common'>" + a[i].stock +"</td>";
        }

        var td = document.getElementById('product-data');
        td.innerHTML = someData;
    }
}
$(function () {
    $("#expired").click(function () {
        if ($(this).is(":checked")) {
           
            $(".expired").hide();
        } else {
            $(".expired").show();
        }
    });
});


$(function () {
    $("#low").click(function () {
        if ($(this).is(":checked")) {
            
            $(".inStock").hide();
        } else {
            $(".inStock").show();
        }
    });
});