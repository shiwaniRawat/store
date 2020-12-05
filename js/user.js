const dataFromBackendForUser= fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users').then(
    res=>{
       res.json().then(
           
           data=>{
            
               console.log(data)
               
               if(data.length > 0){
               
                var temp = ""

              
                 
                data.forEach(value => {
                   
                
                    temp +="<tr class="+"table-row"+">";
                    temp +="<td>"+value.id+"</td>";
                    temp +="<td>"+"<img src="+value.profilePic+">"+"</td>";
                    
                    temp +="<td>"+value.fullName+"</td>";
                    temp +="<td>"+value.dob+"</td>";
                    temp +="<td>"+value.gender+"</td>";
                    temp +="<td>"+value.currentCity+","+value.currentCountry+"</td>";

                });


               var toShowData= document.getElementById("data-user");
               toShowData.innerHTML = temp;


               }
           }
       )
    }
)

var searchBox = document.getElementById('myInput')

searchBox.addEventListener('keyup', function(){

    var filterSearch = search.value.toUpperCase();
    var tableRow = document.getElementsByClassName('table-row');

    if(filterSearch.length > 1){
        for(var i = 0; i < tableRow.length; i++){
            let temp = tableRow[i].children[2].innerText.toUpperCase()
            if(temp.includes(filterSearch)){
                tableRow[i].style.display = ""
            } else {
                tableRow[i].style.display = "none"
            }
        }
    }

    else {
        for(var i =0; i < tableRow.length; i++){
            let temp2 = tableRow[i].children[2].innerText.toUpperCase();
            tableRow[i].style.display = ""
        }
    }
})

const rectify =()=>{
    var Btn = document.getElementById("null-btn");
    let filtera = document.getElementById("myInput");
    Btn.addEventListener('click',()=>{
        filtera.value=" "
    })

}
