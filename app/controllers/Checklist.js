var args = arguments[0] || {};


var typeCheckBox = Titanium.UI.createButton({
        image: '../images/unchecked.png',
    checked:false,
        width: 20,
        height: 20,
        left: 10
    });
 
    typeCheckBox.addEventListener('click', function(e){
        if (e.source.checked == true){
            e.source.image = '../images/unchecked.png',
            e.source.checked = false;
        } else {
            e.source.image = '../images/checked.png',
            e.source.checked = true;
        };
    });
    
$.checklist.open();
