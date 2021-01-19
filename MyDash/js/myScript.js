$('.custom-file-input').on('change', function () {
    $('.custom-file-label').text($(this).val().split('\\').pop());
});

