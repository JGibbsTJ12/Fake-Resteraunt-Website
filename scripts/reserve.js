function validate(){
    var name = document.forms.reserveform.name.value;
    var phone = document.forms.reserveform.phone.value;
    var numofguests = document.forms.reserveform.numofguests.value;
    var regPhone= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var regName = /\d+$/g;

    if(name == "" || regName.test(name)) {
        window.alert("Please enter a proper name.");
        name.focus();
        return false;
    }
    if(phone.value.match(regPhone)) { 
        return true;
    } else {
        window.alert("Please enter a valid phone number.");
        phone.focus();
        return false;
    }
    if(numofguests < 1) {
        window.alert("Please enter a valid number of guests.");
        numofguests.focus();
        return false;
    }
    if(numofguests > 20) {
        window.alert("Party size is too high.");
        numofguests.focus();
        return false;
    }

    return true;
}