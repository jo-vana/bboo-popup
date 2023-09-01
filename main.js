jQuery(document).ready(function(){
    showPopup();
});
  
function showPopup(){
    jQuery('#close_popup').on('click', function(){
        jQuery('#popup_template').removeClass('show');
        jQuery('body').removeClass('overlay');
    })
    if(window.location.pathname == "/index.html"){    //set pathname to Home page
        setTimeout(() => {
            jQuery('#popup_template').addClass('show');
            jQuery('body').addClass('overlay-popup');
            jQuery('#get_email').on('click', function(){
                let inputValue = jQuery('#newsletter_input').val(); //variable with email value
                let inputValueValid = document.getElementById("newsletter_input").validity.valid;
                if(!inputValueValid) {
                    document.getElementById("email_validation").textContent += "Neispravan e-mail format";
                }
                if(inputValue && inputValueValid) {
                    jQuery('#popup_template').removeClass('show');
                    jQuery('body').removeClass('overlay-popup');
                }
            })
        }, 5000);
    }
}