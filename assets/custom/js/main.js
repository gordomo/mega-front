config = {
//    serverUrl: "http://localhost/megaback/actions.php",
    serverUrl: "http://grupovetasrl.com/proyectos/megaback/actions.php"
};
screem = 'home';
$(document).ready(function(){
    var usuario = Cookies.get('user');
    if(usuario){
        var usr = jQuery.parseJSON(usuario);
        cargarDataPerfil(usr);
        cargarHome();
    }else{
        showForm();
    }

//    cargarEditProfile();
});
function cargarDataPerfil(usr){
    //perfil
    $("#img-profile").attr('src', usr.photo);
    $('#nombre-profile').html(usr.name);
    $('#address-profile').html(usr.address);
    $('#mail-profile').html(usr.mail);
    var date = new Date(usr.nac);
    $('#nac-profile').html((date.getDate() + 1) + '/'+ (date.getMonth() + 1) + '/' + date.getFullYear());
    cargarDataPerfilEdit(usr);
}

function cargarDataPerfilEdit(usr){
        
    //edicio perfil
    $('#name-profile-edit').val(usr.name);
    $('#mail-profile-edit').val(usr.mail);
    $('#address-profile-edit').val(usr.address);
    $('#nac-profile-edit').val(usr.nac);
    $('#img-profile-edit').attr('src', usr.photo);
    $('#carton-profile-edit').val(usr.carton);
}

function hideAll(){
    $(".news").hide();
    $(".home").hide();
    $(".cargando").hide();
    $(".response").css('opacity', '0');
    $(".login-page").hide();
    $(".vivo").hide();
    $(".listado").hide();
    $(".profile").hide();
    $(".edit-profile").hide();
    document.getElementById("radio1").pause();
    document.getElementById("radio2").pause();
    hideStikiFooter();
    hideStikiButton();
}

function cargarHome(){
    screem = 'home';
    hideAll();
    $(".home").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600, showStikiButton());
    $("#menu-volver").removeClass("fa-arrow-left");
    $("#menu-volver").addClass("fa-bars");
    $("#menu-volver").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600);
    
}
function cargarEditProfile(){
    screem = 'edit-profile';
    hideAll();
    $("#menu-volver").removeClass("fa-bars");
    $("#menu-volver").addClass("fa-arrow-left");
    $(".edit-profile").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600, showStikiButton());
}

function cargarProfile(){
    screem = 'profile';
    hideAll();
    $("#menu-volver").removeClass("fa-bars");
    $("#menu-volver").addClass("fa-arrow-left");
    $(".profile").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600, showStikiButton());
    
}

function cargarNews(){
    screem = 'news';
    hideAll();
    $("#menu-volver").removeClass("fa-bars");
    $("#menu-volver").addClass("fa-arrow-left");
    $(".news").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600, showStikiButton());
}

function cargarListado(){
    screem = 'listado';
    hideAll();
    $("#menu-volver").removeClass("fa-bars");
    $("#menu-volver").addClass("fa-arrow-left");
    $(".listado").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600, showStikiButton());
}

function cargarVivo(){
    screem = 'vivo';
    hideAll();
    $("#menu-volver").removeClass("fa-bars");
    $("#menu-volver").addClass("fa-arrow-left");
    $(".vivo").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600, showStikiButton());
}
function showForm(){
    hideAll();
    $(".login-page").show();
    $(".form").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600);
}

function showStikiButton(){
    $(".stiki-button").show('slide', {direction: 'left', easing:'easeInOutQuint'}, 200);
}
function hideStikiButton(){
    $(".stiki-button").hide();
}

function hideStikiFooter (){
    $('.footer').css('height', '0');
    $('.'+screem+"-button").hide();
}
function showStikiFooter(){
    $('.footer').css('height', '15vh');
    $('.'+screem+"-button").show('fast');
}

function guardarProfile(){
    var usr = jQuery.parseJSON(Cookies.get('user'));
    var nameProfileEdit = $('#name-profile-edit').val();
    var mailProfileEdit = $('#mail-profile-edit').val();
    var addressProfileEdit = $('#address-profile-edit').val();
    var nacProfileEdit = $('#nac-profile-edit').val();
    var cartonProfileEdit = $('#carton-profile-edit').val();
    if(usr.name == nameProfileEdit && usr.mail == mailProfileEdit && usr.address == addressProfileEdit && usr.nac == nacProfileEdit && usr.carton == cartonProfileEdit)
    {
        cargarProfile();
    }
    else
    {
        editarUsuario(usr.id, nameProfileEdit, mailProfileEdit, addressProfileEdit, nacProfileEdit, cartonProfileEdit);
    }
}


$('#news').click(function(){
    cargarNews();
});
$('#listado').click(function(){
    cargarListado();
});
$('#vivo').click(function(){
    cargarVivo();
});
$('#profile').click(function(){
    cargarProfile();
});

$('#menu-volver').click(function(){
    if($('#menu-volver').hasClass("fa-bars")){
        showStikiFooter();
    }
    else{
        cargarHome();
    }
    
    
});

$('.container').click(function(){
    hideStikiFooter();
});
$('#edit-profile').click(function(){
    cargarEditProfile();
});
$('.volver').click(function(){
    cargarHome();
});
$('.volver-profile').click(function(){
    cargarProfile();
});
$('#guardar-edit-profile').click(function(){
    guardarProfile();
});
$('.salir').click(function(){
    var usr = jQuery.parseJSON(Cookies.get('user'));
    updateUserLogStatus(usr, 0);
    showForm();
});

$('#registrarse').click(function(){
    $('.login-form').hide();
    $('.register-form').show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600);
});

$('#volver').click(function(){
    $('.register-form').hide();
    $('.login-form').show('slide', {direction: 'left', easing:'easeInOutQuint'}, 600);
});

$('#ingresar').click(function(){
        
        $('.response').removeClass('alert-danger');
        $('.response').addClass('alert-info');
        $('.response').html('<img class="img-responsive" style="margin: 0 auto;max-width: 40px;" src="assets/img/loading.gif">');
        $('.response').stop();
        $('.response').css('opacity', 1);
            
        if($('#carton').val() === '' || $('#mail').val() === ''){
            $('.response').addClass('alert-danger');
            $('.response').html("Complete todos los campos");
            $('.response').stop();
            $('.response').css('opacity', 1);
            setTimeout(function(){
                $('.response').css('opacity', 0);
            }, 3000);
        }
        else if(!isEmail($('#mail').val()))
        {
            $('.response').addClass('alert-danger');
            $('.response').html("El correo no es válido");
            $('.response').stop();
            $('.response').css('opacity', 1);
            setTimeout(function(){
                $('.response').css('opacity', 0);
            }, 3000);
        }
        else
        {
            $.post({
                    url: config.serverUrl + "?action=getUsrByMailCarton",
                    data: {
                            carton: $('#carton').val(),
                            mail: $("#mail").val()
                    },
                    dataType: "jsonp",
                    jsonpCallback: 'jsonpCallback',
                    timeout: 1000,
                    error: function(jqXHR, textStatus, errorThrown) {
                        if(textStatus==="timeout") {
                           $('.response').addClass('alert-danger');
                                $('.response').html("Revise su conexion de internet");
                                $('.response').stop();
                                $('.response').css('opacity', 1);
                                setTimeout(function(){
                                    $('.response').css('opacity', 0);
                                }, 3000);
                        } 
                    },
                    success: function( result ) {
                            if(result.found){
                                updateUserLogStatus(result.usr, 1);
                                cargarDataPerfil(result.usr);
                                cargarHome();
                            }
                            else{
                                $('.response').addClass('alert-danger');
                                $('.response').html("Usuario no registrado");
                                $('.response').stop();
                                $('.response').css('opacity', 1);
                                setTimeout(function(){
                                    $('.response').css('opacity', 0);
                                }, 3000);
                            }
                        }
                  });
        }
});

$('#enviarRegistro').click(function(){
        if($('#cartonReg').val() === '' || $('#mailReg').val() === ''){
            $('.responseReg').addClass('alert-danger');
            $('.responseReg').html("Complete todos los campos");
            $('.responseReg').stop();
            $('.responseReg').css('opacity', 1);
            setTimeout(function(){
                $('.responseReg').css('opacity', 0);
            }, 3000);
        }
        else if(!isEmail($('#mailReg').val()))
        {
            $('.responseReg').addClass('alert-danger');
            $('.responseReg').html("El correo no es válido");
            $('.responseReg').stop();
            $('.responseReg').css('opacity', 1);
            setTimeout(function(){
                $('.responseReg').css('opacity', 0);
            }, 3000);
        }
        else
        {
            $.post({
                    url: config.serverUrl + "?action=add",
                    data: {
                            carton: $('#cartonReg').val(),
                            mail: $("#mailReg").val()
                    },
                    dataType: "jsonp",
                    jsonpCallback: 'jsonpCallback',
                    timeout: 1000,
                    error: function(jqXHR, textStatus, errorThrown) {
                        if(textStatus==="timeout") {
                           $('.response').addClass('alert-danger');
                                $('.response').html("Revise su conexion de internet");
                                $('.response').stop();
                                $('.response').css('opacity', 1);
                                setTimeout(function(){
                                    $('.response').css('opacity', 0);
                                }, 3000);
                        } 
                    },
                    success: function( result ) {
                            if(result.result === 'ok'){
                                updateUserLogStatus(result.usr, 1);
                                cargarDataPerfil(result.usr);
                                cargarHome();
                            }
                            else{
                                $('.responseReg').stop();
                                $('.responseReg').addClass('alert-danger');
                                $('.responseReg').html("Usuario no registrado");
                                $('.responseReg').css('opacity', 1);
                                setTimeout(function(){
                                    $('.responseReg').css('opacity', 0);
                                }, 3000);
                            }
                        }
                  });
        }
});

function updateUserLogStatus(usr, status){
    $.post({
            url: config.serverUrl + "?action=updateUserLogStatus",
            data: {
                logued: status,
                id: usr.id
                },
            dataType: "jsonp",
            jsonpCallback: 'jsonpCallback',
            timeout: 1000,
            error: function(jqXHR, textStatus, errorThrown) {
                if(textStatus==="timeout") {
                   //do something on timeout
                } 
            },
            success: function( result ) {
                if(result.result === 'ok'){
                    var usr = {
                                id: result.usr.id, 
                                mail: result.usr.mail, 
                                carton: result.usr.carton, 
                                habilitado: result.usr.habilitado, 
                                logued: result.usr.logued,
                                name: result.usr.name,
                                address: result.usr.address,
                                nac: result.usr.nac,
                                photo: result.usr.photo
                            };
                            
                    if(status === 1){
                        Cookies.set('user', usr);
                    }else{
                        Cookies.remove('user');
                    }
                }
                else
                {
                    //TODO set ko response
                }
            }
            //TODO set ko response
        });
}
function editarUsuario(id, nameProfileEdit, mailProfileEdit, addressProfileEdit, nacProfileEdit, cartonProfileEdit){
    $.post({
            url: config.serverUrl + "?action=editarUsr",
            data: {
                id: id,
                nombre: nameProfileEdit,
                mail: mailProfileEdit,
                address: addressProfileEdit,
                nac: nacProfileEdit,
                carton: cartonProfileEdit,
                logued: 1
                },
            dataType: "jsonp",
            jsonpCallback: 'jsonpCallback',
            timeout: 1000,
            error: function(jqXHR, textStatus, errorThrown) {
                if(textStatus==="timeout") {
                   //do something on timeout
                } 
            },
            success: function( result ) {
                if(result.result === 'ok'){
                    var usr = {
                                id: result.usr.id, 
                                mail: result.usr.mail, 
                                carton: result.usr.carton, 
                                habilitado: result.usr.habilitado, 
                                logued: result.usr.logued,
                                name: result.usr.name,
                                address: result.usr.address,
                                nac: result.usr.nac,
                                photo: result.usr.photo
                            };
                            
                    Cookies.set('user', usr);
                    cargarDataPerfil(usr);
                    cargarProfile();
                }
                else
                {
                    //TODO set ko response
                }
            }
            //TODO set ko response
        });
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}