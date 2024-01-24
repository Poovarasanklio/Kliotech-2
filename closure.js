function outerfnc () {
    let y =1;
    function innerfnc (){
    let z=y;
    console.log(z);
    }
    return innerfnc();
}
let variable =outerfnc();
variable();
