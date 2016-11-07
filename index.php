<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Mega Sorteo</title>

        <!-- Bootstrap -->
        <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/custom/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="assets/fontawesome/font-awesome-4.7.0/css/font-awesome.min.css">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <!--HOME-->
        <div class="container home" style="height: 98vh; margin-top: 2vh;">

            <div class="uno gridItem" id="news">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <div class="gridItemFooter">Noticias</div>  
            </div>

            <div class="uno gridItem" id="listado">
                <i class="fa fa-th-list" aria-hidden="true"></i>
                <div class="gridItemFooter">Ganadores</div> 
            </div>

            <div class="uno gridItem" id="vivo">
                <i class="fa fa-bullhorn" aria-hidden="true"></i>
                <div class="gridItemFooter">Sorteo en Vivo</div> 
            </div>
        </div>
        <!--NOTICIAS-->
        <div class="container news" style="height: 95vh; margin-top: 5vh; color: white; display:none">
            <!--<img class="img-responsive" style="margin: 40vh auto;max-width: 40px;" src="assets/img/loading.gif">-->
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img style="height: 55px;width: 55px"class="img-thumbnail img-responsive media-object" src="assets/img/profile-default.jpeg" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Jon Snow</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                </div>
            </div>
            <div class="separador"></div>
            <div class="media">
                <div class="media-body" style="text-align: right">
                    <h4 class="media-heading">Jon Snow</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                </div>
                <div class="media-right">
                    <a href="#">
                        <img style="height: 55px;width: 55px"class="img-thumbnail img-responsive media-object" src="assets/img/profile-default.jpeg" alt="...">
                    </a>
                </div>
            </div>
        </div>
        <!--GANADORES-->
        <div class="container listado" style="height: 95vh; margin-top: 5vh; color: white; display:none">
            <!--<img class="img-responsive" style="margin: 40vh auto;max-width: 40px;" src="assets/img/loading.gif">-->
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img style="height: 55px;width: 55px"class="img-circle img-thumbnail img-responsive media-object" src="assets/img/profile-default.jpeg" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Jon Snow</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                </div>
            </div>
            <div class="separador"></div>
            <div class="media">
                <div class="media-body" style="text-align: right">
                    <h4 class="media-heading">Jon Snow</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                </div>
                <div class="media-right">
                    <a href="#">
                        <img style="height: 55px;width: 55px"class="img-circle img-thumbnail img-responsive media-object" src="assets/img/profile-default.jpeg" alt="...">
                    </a>
                </div>
            </div>
        </div>
        <!-- VIVO -->
        <div class="container vivo" style="height: 95vh; margin-top: 5vh; color: white; display:none">
            <!--<img class="img-responsive" style="margin: 40vh auto;max-width: 40px;" src="assets/img/loading.gif">-->
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img style="height: 55px;width: 55px"class="img-circle img-thumbnail img-responsive media-object" src="assets/img/profile-default.jpeg" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">RadioFonica</h4>
                    <audio id="radio1" controls>
                        <source src="http://200.58.106.247:8628/;" type="audio/mpeg">
                        <p>Tu navegador no es compatible con esta característica.</p>
                    </audio>
                </div>
            </div>
            <div class="separador"></div>
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img style="height: 55px;width: 55px"class="img-circle img-thumbnail img-responsive media-object" src="assets/img/profile-default.jpeg" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">RadioFonica</h4>
                    <audio id="radio2" controls>
                        <source src="http://200.58.106.247:8628/;" type="audio/mpeg">
                        <p>Tu navegador no es compatible con esta característica.</p>
                    </audio>
                </div>
            </div>
        </div>
        <!--LOGIN-->
        <div class="login-page" style="display:block">
            <div class="login-header">
                <img class="img-responsive" src="assets/img/logomegasorteo.png">
                <img class="img-responsive cargando" style="margin: 20vh auto; max-width: 15vw;" src="assets/img/loading.gif">
            </div>
            <div class="form">
                <form class="login-form">
                    <div class="form-group-lg">
                        <input class="form-control" id="carton" type="text" placeholder="N° de cartón"/>
                        <input class="form-control" id="mail" type="email" placeholder="Correo electrónico"/>
                    </div>
                    <div class="form-group-lg">
                        <a id="ingresar" class="btn btn-success col-sm-12" style="border-radius: 0; margin-bottom: 10px; width: 100%">Ingresar</a>
                        <a id="registrarse" class="btn btn-info col-sm-12" style="border-radius: 0; margin-bottom: 10px; width: 100%">Aún no ingresaste tu registro?</a>
                        <div class="alert alert-danger response" style="display: block; border-radius: 0; opacity: 0; text-align: center">El correo no es válido</div>
                    </div>
                </form>
                <form class="register-form">
                    <div class="form-group-lg">
                        <input class="form-control" id="cartonReg" type="text" placeholder="N° de cartón"/>
                        <input class="form-control" id="mailReg" type="email" placeholder="Correo electrónico"/>
                    </div>
                    <div class="form-group-lg">
                        <a id="enviarRegistro" class="btn btn-success col-sm-12"  style="border-radius: 0; margin-bottom: 10px; width: 100%">Registrarse</a>
                        <a id="volver" class="btn btn-info col-sm-12"  style="border-radius: 0; margin-bottom: 10px; width: 100%">Volver</a>
                        <div class="alert responseReg" style="display: block; border-radius: 0; opacity: 0; text-align: center"></div>
                    </div>
                </form>
            </div>
        </div>
        <!-- PROFILE -->
        <div class="container profile" style="display: none">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="well well-sm">
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <img id="img-profile" src="" alt="" class="img-circle img-responsive img-profile" />
                            </div>
                            <div class="col-sm-6 col-md-8">
                                <h4 id="nombre-profile"></h4>
                                <small>
                                    <cite title="" id="address-profile"></cite>
                                    <i class="glyphicon glyphicon-map-marker profile-icon"></i>
                                </small>
                                <p>
                                    <i class="glyphicon glyphicon-envelope profile-icon"></i>
                                    <span id="mail-profile"></span>
                                    <br />
                                    <i class="glyphicon glyphicon-gift profile-icon"></i>
                                    <span id="nac-profile"></span>
                                </p>
                                <!-- Split button -->
                                <div class="btn-group" style="width: 100%; margin-top: 2vh">
                                    <button id="edit-profile" type="button" class="btn btn-primary">
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- EDIT PROFILE -->
        <div class="container edit-profile" style="display: none">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="well well-sm form-edit-profile">
                        <form class="form-horizontal" enctype="multipart/form-data" method="POST">
                            <div class="form-group">
                                <div class="col-sm-10" style="text-align: center;">
                                    <img id="img-profile-edit" src="" alt="" class="img-circle" />
                                    <input type="text" class="form-control" id="name-profile-edit" placeholder="Nombre">
                                </div>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="mail-profile-edit" placeholder="Email">
                                </div>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="carton-profile-edit" placeholder="Número de carton">
                                </div>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="address-profile-edit" placeholder="Dirección">
                                </div>
                                <div class="col-sm-10">
                                    <input type="date" class="form-control" id="nac-profile-edit" placeholder="Fecha de nacimiento">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <a id="guardar-edit-profile" type="button" class="btn btn-success">Guardar</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!--STIKI BUTTON-->
        <div class="stiki-button">
            <i id="menu-volver" class="fa" aria-hidden="true"></i>
        </div>
        <!--FOOTER-->
        <div class="footer">
            <i class="fa fa-sign-out salir home-button" aria-hidden="true"></i>
            <i class="fa fa-user home-button" aria-hidden="true" id="profile"></i>
            <i class="fa fa-arrow-left volver news-button listado-button vivo-button profile-button" aria-hidden="true"></i>
            <i class="fa fa-arrow-left volver-profile edit-profile-button" aria-hidden="true"></i>
        </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="assets/jquery/jquery-3.1.1.min.js"></script>
        <script src="assets/jquery/jquery-cookies-1.4.1.js"></script>
        <script src="assets/jquery/jquery-ui.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/custom/js/tweenmax.js"></script>
        <script src="assets/custom/js/main.js"></script>


    </body>
</html>