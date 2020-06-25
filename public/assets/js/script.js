/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
$(() => {
  $('#addburger').submit((event) => {
    event.preventDefault();
    const body = {
      name: $('#burger-name').val().trim(),
    };
    // Prevents empty additions
    if (body.name === '') {
      return;
    }
    // Send Post Ajax request
    $.ajax('/api/', {
      type: 'POST',
      data: body,
    }).then(() => {
      // Reloads the page to update and refresh the lists
      location.reload();
    });
  });
  $('.devour').on('click', (event) => {
    const body = {
      id: $(event.target).data('id'),
    };
    // sends a PUT request to the dom
    $.ajax('/api/', {
      type: 'PUT',
      data: body,
    }).then(() => {
      location.reload();
    });
  });

  $('.remove').on('click', (event) => {
    const body = {
      id: $(event.target).data('id'),
    };
      // sends a delete request
    $.ajax('/api/', {
      type: 'DELETE',
      data: body,
    }).then(() => {
      location.reload();
    });
  });
});
