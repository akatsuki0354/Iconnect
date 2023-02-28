function Trigger(){
    const arrow = document.getElementById('arrow')
  
      if (arrow.classList.contains('fa-eye-slash')) {
        /* Icon */
        arrow.classList.remove('fa-eye-slash')
        arrow.classList.add('fa-eye')
      } else {
        /* Icon */
        arrow.classList.add('fa-eye-slash')
         arrow.classList.remove('fa-eye')
      }
  
      var x = document.getElementById("passInp");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }