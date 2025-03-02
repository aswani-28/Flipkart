var zoom = document.querySelector('#icon')
document.querySelector('#icon').addEventListener('click', function () {
    var element = document.querySelector('#loge');
    var setss=document.querySelector('noto');
    if (element.style.width === '250px') {
        element.style.width = '0';
        element.style.boxShadow = 'none';
  


    }
    else {
        element.style.width = '250px';
        element.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.9)';
        
    }

});
var zoomset = document.querySelector('#text');
document.querySelector('#text').addEventListener('click', function () {
    var element = document.querySelector('#noto');
    var setss=document.querySelector('noto');
    var login=document.querySelector('#loge')
    if (element.style.width === '250px') {
        element.style.width = '0';
        element.style.boxShadow = 'none'
        
    }
    else {
        element.style.width = '250px';
        element.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.9)';
        
    }
});
document.querySelector('#tlines').addEventListener('click', function () {
    var elements = document.querySelector('#diss');
    if (elements.style.left === '0') {
        elements.style.left = '-60%'


    }
    else {
        elements.style.left = '0';

    }
});
document.querySelector('#croo').addEventListener('click', function () {
    var elements = document.querySelector('#diss');
    var login=document.querySelector('#loge');
    var setss=document.querySelector('#noto')
    if (elements.style.left === '-55%') {
        elements.style.left = '0'
        


    }
    else {
        elements.style.left = '-55%';
        login.style.display='none'
        setss.style.display='none'

    }
});

document.querySelector('#open').addEventListener('click', function () {
    var one = document.querySelector('.sea1');
    if (one.style.opacity='1') {
        one.style.opacity='0'


    }
    else {
        one.style.opacity='1';

    }
});
