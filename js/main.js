/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }  
  modalBtn.forEach(element => {
      element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'); 
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');        
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "modal__invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15 
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: {
        required: "Заполните поле Телефон",
        minlength: "Введите корректный Телефон",
      },  
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });


  $('.control__form').validate({
    errorElement: "div",
    errorClass: "control__invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15 
      },
      userPhone: "required",
      // правило-объект (блок)
    }, // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: {
        required: "Заполните поле Телефон",
        minlength: "Введите корректный Телефон"
      }
    }
  });


  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "footer__invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15 
      },
      userPhone: "required",
      // правило-объект (блок)
      userQuestion: {
        required: true,
        question: true,
        minlength: 4
      }
    }, // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: {
        required: "Заполните поле Телефон",
        minlength: "Введите корректный Телефон"
      },
      userQuestion: {
        required: "Заполните поле Вопрос",
        minlength: "Минимиальная длина вопроса {0} символов"
      }
    }
    
  });
  // маска для телефона

  $('input[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});


});