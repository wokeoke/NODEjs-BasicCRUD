// ADD USER
$('#add_user').submit(function (e) {
  alert('Data Inserted Successfully ');
});

// UPDATE USER
$('#update_user').submit(function (e) {
  e.preventDefault();

  var unindexed_array = $(this).serializeArray();
  // console.log(unindexed_array);

  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value'];
  });
  // console.log(data);

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: 'PUT',
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert('Data Updated Successfully');
  });
});
