/* global $, Stripe */
//Document ready
//Set stripe public key
//when user clicks form submit btn
//prevent default submission behavior

//collecet credit card fields and send it to stripe in exchange for token
//Inject card toekn as hidden field into form
//submit form to our rails app.

$(document).on('turbolinks:load', function(){
    var theForm = $('#pro_form');
    var submitBtn = $('#form-submit-btn');
    
    Stripe.setPublishableKey($ ('meta[name="stripe-key"]').attr('content'));
    submitBtn.click(function(event){
        event.preventDefault();
        submitBtn.val("Processing").prop('disabled',true);
        
        
        var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
        var error = false;
        
        if(!Stripe.card.validateCardNumber(ccNum))
        {
         error = true;
         alert('The Credit Card Number appears to be invalid')
        }
        if(!Stripe.card.validateCVC(cvcNum))
        {
         error = true;
         alert('The Credit Card Number appears to be invalid')
        }
        if(!Stripe.card.validateExpiry(expMonth , expYear))
        {
         error = true;
         alert('The Credit Card Number appears to be invalid')
        }
        
        if(error) {
            submitBtn.prop('disabled',false).val("Sign Up");
        }
        
        else{
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
                }, stripeResponseHandler);
                return false;
            }
        });
    
    function stripeResponseHandler(status, response){
       var token = response.id;
       
       theForm.append( $('<input type="hidden" name="user[stripe_car_token]">').val(token));
    
        
        theForm.get(0).submit();    
        
    }
    
});