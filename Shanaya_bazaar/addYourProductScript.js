// document.designMode="on";

function designModeEdit(){
   var edit= document.getElementsByClassName("editContent");
   for(var i=0; i<edit.length; i++){
    edit[i].contentEditable="true";
    edit[i].focus();
    }


}



