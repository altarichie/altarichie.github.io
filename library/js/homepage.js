$('.enter_link').click(function(){
    $('#homepage').show(2000);
    $('#splashscreen').hide(1000);
});

$('#profil').click(function(){
    $('#content-profil').show(2000);
    $('#content-homepage').hide(1000);
    $('#content-contact').hide(1000);
    $('#content-keluarga').hide(1000);
    $('#content-pendidikan').hide(1000);
});

$('#contact').click(function(){
    $('#content-contact').show(2000);
    $('#content-homepage').hide(1000);
    $('#content-profil').hide(1000);
    $('#content-keluarga').hide(1000);
    $('#content-pendidikan').hide(1000);
});

$('#keluarga').click(function(){
    $('#content-keluarga').show(2000);
    $('#content-homepage').hide(1000);
    $('#content-profil').hide(1000);
    $('#content-contact').hide(1000);
    $('#content-pendidikan').hide(1000);
});

$('#pendidikan').click(function(){
    $('#content-pendidikan').show(2000);
    $('#content-homepage').hide(1000);
    $('#content-profil').hide(1000);
    $('#content-contact').hide(1000);
    $('#content-keluarga').hide(1000);
});