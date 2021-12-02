$('.js-open-modal').click(function(event) {
    event.preventDefault();
    
    var modalName = $(this).attr('data-modal');
    var modal = $('.js-modal[data-modal="' + modalName + '"]');
    
    modal.addClass('is-show');
    $('.js-modal-overlay').addClass('is-show')
 });
 
 $('.js-modal-close').click(function() {
    $(this).parent('.js-modal').removeClass('is-show');
    $('.js-modal-overlay').removeClass('is-show');
 });
    
 $('.js-modal-overlay').click(function() {
    $('.js-modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
 }) 

 document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
    };
}, false);