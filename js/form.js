$('document').ready(function(){

$("#waterform").submit(function() {
  var stopsubmit = false;
    var e = document.getElementById("year");
    var strUser = e.options[e.selectedIndex].value;
if($('#name').val() == "") {
  errorfield('#name-form');
  alert("gh");
  stopsubmit=true;
}
if($('#email').val() == "") {
  errorfield('#email-form');
  stopsubmit=true;
}
if($('#number').val() == "") {
  errorfield('#number-form');
  stopsubmit=true;
}
if($('#college').val() == "") {
  errorfield('#college-form');
  stopsubmit=true;
}
if($('#dept').val() == "") {
  errorfield('#dept-form');
  stopsubmit=true;
}
if($('#year').val() == "") {
  errorfield('#year-form');
  stopsubmit=true;
}
if($('#city').val() == "") {
  errorfield('#city-form');
  stopsubmit=true;
}
if($('#state').val() == "") {
  errorfield('#state-form');
  stopsubmit=true;
}
  if(stopsubmit) {alert("All feilds with * are necessary to be filled"); event.preventDefault(); return false}
  else{
     var inputq1 = encodeURIComponent($('#name').val());
              var inputq2 = encodeURIComponent($('#email').val());
              var inputq3 = encodeURIComponent($('#number').val());
              var inputq4 = encodeURIComponent($('#college').val());
              var inputq5 = encodeURIComponent($('#dept').val());
              var inputq6 = encodeURIComponent(strUser);
              var inputq7 = encodeURIComponent($('#city').val());
              var inputq8 = encodeURIComponent($('#state').val());
              var q1ID = "entry.1657814757";    
              var q2ID = "entry.7207368";   
              var q3ID = "entry.1636613707";   
              var q4ID = "entry.1765887971";    
              var q5ID = "entry.2028792786";    
              var q6ID = "entry.610273026";  
              var q7ID = "entry.764873609";  
              var q8ID = "entry.309015332";   
              var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSemKP6BVE5ZMkbKpm8I8fB5EaSlCFyD82eBwuhJbAcof5ZG7A/formResponse?';
              var submitRef = '&submit=Submit';
              var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + q4ID + "=" + inputq4 + "&" +  q5ID + "=" + inputq5 + "&" +q6ID + "=" + inputq6 + "&" + q7ID + "=" + inputq7 + "&" + q8ID + "=" + inputq8 +  submitRef);
              //$(this)[0].action=submitURL;
              //alert("Response Submitted Successfully!");
              //document.getElementById("waterform").reset();
              event.preventDefault(); //prevent default action 
  var post_url = submitURL; //get form action url
  var request_method = $(this).attr("method"); //get form GET/POST method
  var form_data = $(this).serialize(); //Encode form elements for submission
  alert("Response Submitted Successfully!");
  $.ajax({
    url : post_url,
    type: request_method,
    data : form_data
  }).done(function(response){ //
    alert("Response Submitted Successfully!");
    //event.preventDefault();
  });
  document.getElementById("waterform").reset();
  }
});
});