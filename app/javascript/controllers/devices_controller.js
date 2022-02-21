$('.find_matching_devices').on('click', function () {
  $('#os_version_range').removeClass('is-invalid');

  const os_version_range = $('#os_version_range').val();

  if (os_version_range) {
    $.ajax({
      url: '/devices/search_by',
      type: 'GET',
      data: { os_version_range },
      success: handleSuccess,
      error: handleOnError,
    });
  } else {
    handleOnError();
  }
});

const handleSuccess = (data) => {
  if (!data) {
    $('.modal-body').css('color', 'red');
    $('.modal-body').text("Couldn't find any devices");
  }else{
    $('.modal-body').css('color', 'green');
    $('.modal-body').text(`${data} matching devices`);
  }

  $('#devices_count_modal').modal('show');
};

const handleOnError = () => {
  $('#os_version_range').addClass('is-invalid');
};
