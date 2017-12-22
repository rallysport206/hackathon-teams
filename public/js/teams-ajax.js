
$('.delete-link').click(function(e) {
  e.preventDefault();
  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE'
  }).success(function(data){
    window.location.href = '/teams';
  });
});
// //editing team names
// $('.edit-link').click(function(e) {
//   e.preventDefault();
//   $.ajax({
//     url: $(this).attr('href'),
//     method: 'EDIT'
//   }).success(function(data){
//     window.location.href = '/teams';
//   });
// });
