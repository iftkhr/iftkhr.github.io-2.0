function nav(){
    var x = document.getElementById("nav").classList;
    var y = document.getElementById("dropdown").classList;

    if (x == 'hide' && y != 'icon') {
        x.remove('hide');
        y.add('icon');
    }
    else{
        x.add('hide');
        y.remove('icon');
    }
}