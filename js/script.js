// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    //console.log(elemenTujuan);
    //console.log(elemenTujuan.offset().top);
    //console.log($('html, body').scrollTop());

    //pindahkan scroll
    //$('html, body').scrollTop(elemenTujuan.offset().top);
    
    $('html, body').animate({
        scrollTop : elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});


// paralllax

//about

$(window).on('load',function(){
    //$('.pkiri').addClass('pmuncul');
    //$('.pkanan').addClass('pmuncul');
});


$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    //console.log(wScroll);

    //paragraf
    if( wScroll > $('.pkiri').offset().top - 450){

        $('.pkiri').each(function(i){
            setTimeout(function(){
                //console.log('ok');
                $('.pkiri').eq(i).addClass('pmuncul');
            }, 300 * (i+1));
        });
    }

    if( wScroll > $('.pkanan').offset().top - 450){

        $('.pkanan').each(function(i){
            setTimeout(function(){
                //console.log('ok');
                $('.pkanan').eq(i).addClass('pmuncul');
            }, 300 * (i+1));
        });
    }

    // jumbotron

    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    //portfolio
    if( wScroll > $('.portfolio').offset().top - 310){

        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function(){
                //console.log('ok');
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }

});