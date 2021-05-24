document.addEventListener('DOMContentLoaded', () => {

  // SmoothScroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // WOW.js
  new WOW().init();

  // Swiper.js
  const swiper = new Swiper('.swiper-container', {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 120,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      290: {
        slidesPerView: 1,
        navigation: false,
      },
      767: {
        slidesPerView: 2,
        navigation: true,
      },

      991: {
        slidesPerView: 3
      }
    }
  });


  // PRELOADER

  // document.body.onload = function () {
  //   setTimeout(function () {
  //     let preloader = document.querySelector('.preloader');
  //     if (!preloader.classList.contains('close')) {
  //       preloader.classList.add('close');
  //     }
  //   }, 100)
  // }

  // MOBILE MENU

  const burger = document.querySelector('.header-burger'),
        mobileMenu = document.querySelector('.header-mobile-menu')

  function toggleMobileMenu () {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      burger.classList.toggle('active');
    })
  }

  toggleMobileMenu();


  // MODAL WINDOW
  let choosePlanName = '';

  function toggleModal() {

  const modal = document.querySelector('.modal'),
    btn = document.querySelector('.plans-item-btn'),
    closeModal = document.querySelector('.modal-close'),
    selectOptions = document.querySelectorAll('.modal-form-select option');

  let closeAnime = anime({
    targets: '.modal-close',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: 800,
  })

  //choose plan to select
  btn.addEventListener('click', () => {
    modal.classList.toggle('active');
    document.body.style.overflow = 'hidden';
    closeAnime.play();
    selectOptions.forEach(item => {
      if(item.value === choosePlanName) {
        item.selected = true;
      }
    })
  })


  closeModal.addEventListener('click', () => {
    modal.classList.toggle('active');
    document.body.style.overflow = 'auto';
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      modal.classList.toggle('active');
      document.body.style.overflow = 'auto';
    }
  });
}

toggleModal();

  // FORM VALIDATE
  function formValidate(formClass, btnClass, inputs, select) {
    const form = document.querySelector(formClass),
      btn = document.querySelector(btnClass),
      inputsArr = document.querySelectorAll(inputs),
      formSelect = document.querySelector(select)

    form.addEventListener('submit', () => {
      form.reset();
    })

    btn.disabled = true;
    btn.style.opacity = 0.7;

    for (let i = 0; i < inputsArr.length; i++) {
      inputsArr[i].addEventListener('input', () => {
        if (!inputsArr[i].value.length) {
          inputsArr[i].style.borderBottom = '2px solid red';
          inputsArr[i].required = true;
        }
        else {
          if (inputsArr[i].classList.contains('footer-form-input')) {
            inputsArr[i].style.borderBottom = '1px solid #fff';
            inputsArr[i].required = false;
          }
          else {
            inputsArr[i].style.borderBottom = '2px solid rgba(0, 46, 136, 0.6)';
            inputsArr[i].required = false;
          }
        }
        
        if (!inputsArr[0].required && !inputsArr[1].required) {
          btn.disabled = false;
          btn.style.opacity = 1;
          btn.style.cursor = 'pointer'
        }
        else {
          btn.disabled = true;
          btn.style.opacity = .7;
          btn.style.cursor = 'default'
        }
      })
    }
  }

  formValidate('.footer-form', '.footer-form-btn', '.footer-form-input');
  formValidate('.consultation-form', '.consultation-form-btn', '.consultation-form-input');
  formValidate('.modal-form', '.modal-form-btn', '.modal-form-input');


  // CHOOSE PLAN

  function choosePlan () {
    const planItems = document.querySelectorAll('.plans-item__wrap');

    planItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        for (let i = 0; i < planItems.length; i++) {
          planItems[i].classList.remove('choose');
          if (index === i) {
            planItems[i].classList.add('choose');
            choosePlanName = item.children[0].innerText.toLowerCase();
          }
        }
      })
    })
  }

  choosePlan();



  anime({
    targets: '.hero-title',
    translateX: [-1000, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutSine',
  })

  anime({
    targets: '.hero-title p',
    background: ["linear-gradient(90deg, #AE922C 0%, #C5AA66 100%)"], opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 1600,
  })

  anime({
    targets: '.hero-subtitle',
    translateX: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 1100,
    delay: 500,
  })

  anime({
    targets: '.hero-btn',
    translateX: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 1600,
  })

  // console.log(document.documentElement.clientHeight);

  if (document.documentElement.clientHeight < 850) {
    let title = anime({
      targets: '.results-title',
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      autoplay: false
    });

    let subTitle = anime({
      targets: '.results-subtitle',
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      autoplay: false
    });

    window.addEventListener('scroll', () => {
      title.seek(window.pageYOffset * 2.2);
    })
    window.addEventListener('scroll', () => {
      subTitle.seek(window.pageYOffset * 1.7);
    })
  }




});