$('#search').on('keyup', function() {
  const $userSearch = $('#search').val().toLowerCase();
  $('.gallery a').each(function () {
    const $caption = $(this).attr('data-title').toLowerCase();
    const match = $caption.includes($userSearch);
    if (match === true) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

lightbox.option({
  'maxWidth': 1160,
  'showImageNumberLabel': false,
});