// var student = [];
// fetch("http://127.0.0.1:5500/datatable3.json")
// .then(response => {
//    return response.json();
// })
// .then(data => {
    
//     for(var i of data){
//       // var id = i.Student_id;
//       // var data = i.Grade
//       student.push(i);
//     }
// });

// var jsonData = student;
// console.log(jsonData);


// function createTable(jsonData){ 
//   $(document).ready(function(){
//    $('#table').dataTable({
//      data: jsonData,
//      columns: [
//        { data: 'meta.Student_id' ,'sType': 'string', "bVisible": true, "bSearchable": false},
//        { data: 'meta.Age', 'sType': 'string', 'bVisible': true },
//        { data: 'meta.Gender', 'sType': 'string', 'bVisible': true },
//        { data: 'meta.Grade', 'sType': 'string', 'bVisible': true },
//        { data: 'meta.Employed', 'sType': 'string', 'bVisible': true }
//      ]
//    });
//   });
//  }


// $(document).ready(function () {
//   $.ajax({
//       url : 'http://127.0.0.1:5500/datatable3.json',
//       type : 'POST',
//       dataType : 'json',
//       data: {
//         json: JSON.stringify(jsonData)
//     },
//       success : function(data) {
//           assignToEventsColumns(data);
//       }
//   });


// });