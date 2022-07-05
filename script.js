var final_data = [];
var sdata = [];
var search_data = [];
const pageSize = 10;
let curPage = 1;
const searchBox = document.getElementById("myInput");           

$(document).ready(function () {

    $.getJSON("datatable3.json",function (data) {
        for (i of data) {
            final_data.push(i)
        }
        sdata = final_data.slice(20, 21);
        console.log('sdata', sdata)
        slice_data = final_data.splice(20, 1);
        console.log('slice_data', slice_data)
        Array.prototype.push.apply(sdata, final_data)
        // console.log(Array.prototype.push.apply(sdata, final_data))
        renderTable(sdata);
    });
});


// .........................................Render Table................
function renderTable(data){
    // $("#table tr").remove(); 
    var student = '';

    data.filter((row, index) => {
    let start = (curPage - 1) * pageSize;
    let end = curPage * pageSize;
    if (index >= start && index < end) return true;
    }).forEach(value => {
        student += '<tr>';
            student += '<td>' +
                value.Student_id + '</td>';

            student += '<td>' +
                value.Age + '</td>';

            student += '<td>' +
                value.Gender + '</td>';

            student += '<td>' +
                value.Grade + '</td>';

            student += '<td>' +
                value.Employed + '</td>';

            student += '</tr>';

        });
            
    $("#tbody").empty();
    $('#tbody').append(student);
    // search_data.
   
}
// on change serchBox.value


if(searchBox !== null){
    console.log('SEARCHED_DATA', search_data);
    searchBox.onchange = function(){
        curPage = 1;
        console.log("on change called")
        search_data = [];
        searchBox.addEventListener('change' ,searchTable, false);
    }
}   
else{
    console.log("in null");
    renderTable(sdata);
}


// .............................................................................



document.querySelectorAll('#table th').forEach(t => {
    t.addEventListener('click', sort, false);
});

function sort() {

    var column = $(this).data('column')
    var order = $(this).data('order')

    console.log("column was clicked", column, order);

    if(order == 'desc'){
        $(this).data('order', "asc")
        sdata.sort((a, b) => {
            if (b['Student_id'] == '21') {
                return 0;
            }
            if (a[column] > b[column]) {
                return sdata ? -1 : 1;
            }
        });
        renderTable(sdata);
    }
    else if(order == 'asc'){
        $(this).data('order', "desc")
        sdata.sort((a, b) => {
            if (b['Student_id'] == '21') {
                return 0;
            }
            if (a[column] < b[column]) {
                return sdata ? -1 : 1;
            }
        });
        renderTable(sdata);
    }
}




// .............................................................................

document.querySelector('#nextbutton').addEventListener('click', nextPage, false);
document.querySelector('#previousbutton').addEventListener('click', previousPage, false);

function previousPage() {
    if(document.getElementById("myInput").value != ''){
        if (curPage > 1) curPage--;
        renderTable(search_data);
    }
    else{
    if (curPage > 1) curPage--;
    renderTable(sdata);
    }
}

function nextPage() {
    if(document.getElementById("myInput").value != ''){
        if ((curPage * pageSize) < search_data.length) curPage++;
        renderTable(search_data);
        // search_data = [];
    }
    else{
    if ((curPage * pageSize) < sdata.length) curPage++;
    renderTable(sdata);
    }
}



 // .............................................................................

 
 searchBox.addEventListener('change' ,searchTable, false);

 function searchTable(){
    // let dummy = searchBox.value
    
    var search = searchBox.value;
    console.log('search',search)
    // $("#table tr").remove(); 
     search = search.toLowerCase();
    
    sdata.filter((row, index) => {  
        // row.Gender = row.Gender.toLowerCase()
        if(row.Student_id == search || row.Age == search || row.Gender.toLowerCase() == search || row.Grade.toLowerCase() == search || row.Employed == search){
            // console.log('searchBox',dummy)
            search_data.push(row);
        }
        else if(row.Student_id != search || row.Age != search || row.Gender != search || row.Grade != search || row.Employed != search){
            $('#tbody').append("No matching data are available");
        }
    });
    renderTable(search_data);
}


// searchBox.setAttribute( "onchange", function(){
//     console.log("setattribute function")
//     search_data = [];
// } );

// .............................................................................

function showLessRows() {
                
    if(document.getElementById("myInput").value != ''){
        renderTable(search_data);
    }
    else{
        renderTable(sdata);
    }
}
                
            
function showAllRows() {
                
    var student = '';
    $.each(sdata, function (key, value) {
        student += '<tr>';
            student += '<td>' +
                value.Student_id + '</td>';

            student += '<td>' +
                value.Age + '</td>';

            student += '<td>' +
                value.Gender + '</td>';

            student += '<td>' +
                value.Grade + '</td>';

            student += '<td>' +
                value.Employed + '</td>';

        student += '</tr>';
    });
    $("#tbody").empty();
    $('#tbody').append(student);
    // if(searchBox.value != ''){

        var searchData = searchBox.value.toUpperCase();
        var tableSearch = document.getElementById('table');
        var all = tableSearch.getElementsByTagName('tr');
        
        for(var i=0;i < all.length; i++){
            var address_column = all[i].getElementsByTagName('td');
            for(var j = 0 ; j<address_column.length; j++){
                if(address_column[j]){
                    var address_value = address_column[j].innerHTML || address_column[j].textContent; 
                    address_value = address_value.toUpperCase();
                    if(address_value.indexOf(searchData) > -1){
                        all[i].style.display = '';
                    
                        break;
                    }
                    else{
                        all[i].style.display = 'none';
                    }
                }
            }
        
        }
    // }
}

 // ............................................................................. 

            


           

           













          
            // Object.keys(search_data).forEach(key=>{
            //         student += '<tr>';
            //         student += '<td>' +
            //             search_data[key].Student_id + '</td>';

            //         student += '<td>' +
            //             search_data[key].Age + '</td>';

            //         student += '<td>' +
            //             search_data[key].Gender + '</td>';

            //         student += '<td>' +
            //             search_data[key].Grade + '</td>';

            //         student += '<td>' +
            //             search_data[key].Employed + '</td>';

            //         student += '</tr>';

            //     });
                

            //     $("#tbody").empty();
            //     console.log("studentdata",student)
            //     $('#tbody').append(student);
            //     $('tr:gt(10)').hide();
    






           








