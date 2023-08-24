jQuery(document).ready(function(){
    showPopup();
  });
  
  
  function showPopup(){
    console.log('ha', window)
    jQuery('#close_popup').on('click', function(){
        jQuery('#popup_template').removeClass('show');
        jQuery('body').removeClass('overlay');
    })
   if(window.location.pathname == "/index.html"){    //set pathname to "/"
    setTimeout(() => {
        jQuery('#popup_template').addClass('show');
        jQuery('body').addClass('overlay');
        jQuery('#get_email').on('click', function(){
        let inputValue = jQuery('#newsletter_input').val();
        let inputValueValid = document.getElementById("newsletter_input").validity.valid;
        if(!inputValueValid) {
            document.getElementById("email_validation").textContent += "Neispravan e-mail format";
        }
        if(inputValue && inputValueValid) {
            console.log('email for the newsletter', inputValue);
            jQuery('#popup_template').removeClass('show');
            jQuery('body').removeClass('overlay');
        }
      })
    }, 1000);
   }
  }