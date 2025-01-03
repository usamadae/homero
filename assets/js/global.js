
tailwind.config = {
  theme: {
    extend: {
      colors: {
        
        lightgrey: '#141F2F',
        golden : '#F79B1E',
        gray:'#959AA1',
        bgray:'#F6F6F7',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, #F79B1E, #ED1945)',
      },
    }
  }
}


    $('.logos-slider').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      centerMode: true, // Enables centering
      centerPadding: '0px',
      pauseOnHover: false,
      responsive: [{
      breakpoint: 768,
      settings: {
      slidesToShow: 3
      }
      }, {
      breakpoint: 520,
      settings: {
      slidesToShow: 2
      }
      }]
      });