const $submit = document.getElementById("button"),
$psw = document.getElementById('psw'),
$id = document.getElementById('id'),
$visible = document.getElementById("visible");

document.addEventListener("change",(e)=>{
    if (e.target == $visible) {
        if($visible.checked === false) $psw.type = "contraseña";
        else  $psw.type="text";
        }
})
