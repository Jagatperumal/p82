var mouse_event="empty";
canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
radius=0;
canvas.addEventListener("mouseDown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouse_event=mouseDown;
}
canvas.addEventListener("mouseUp",my_mouseUu);
function my_mousedown(e){
mouse_event=mouseUp;
}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mousedown(e){

mouse_event=mouseLeave;
}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mouseUp(e){

mouse_event=mouseLeave;
}
canvas.addEventListener("mouseMove",my_mouseMove);
function my_mousemove(e){
mouse_event=mouseLeave;
 current_of_mouse_x= e.clientX=canvas.offsetLeft;
 current_of_mouse_y= e.clientY=canvas.offsetTop;

 if(mouseEvent == "mouseDown"){
     console.log("Current position of x and y coordinates");
     console.log("x ="+ current_position_of_mouse_x+"y= "+
     current_position_of_mouse_y);
     ctx.beginPath();
     ctx.strokeStyle= color;
     ctx.lineWidth= width_of_line;
     ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,
        2*Math.PI)
        ctx.stroke();
 }
}
