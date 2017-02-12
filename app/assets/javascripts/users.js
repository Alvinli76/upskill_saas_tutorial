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
        
        
        var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
        Stripe.createToken({
            number: ccNum,
            cvc: cvcNum,
            exp_month: expMonth,
            exp_year: expYear
            
        },stripeResponseHandler);
});