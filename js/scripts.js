// business logic
function Contact(city, country, year, length, notes) {
  this.city = city;
  this.country = country;
  this.year = year;
  this.length = length;
  this.notes = notes;
}
Contact.prototype.cityCountry = function() {
  return this.city + ',' +' ' + this.country;
}

//user Interface Logic
$(document).ready(function() {
  $('#new-contact').submit(function(event) {
    event.preventDefault();

    var inputtedCity = $('input#new-city').val();
    var inputtedCountry = $('input#new-country').val();
    var inputtedYear = $('input#year').val();
    var inputtedLength = $('input#length').val();
    var inputtedNotes = $('input#notes').val();

    var newContact = new Contact(inputtedCity, inputtedCountry, inputtedYear, inputtedLength, inputtedNotes);

    $('ul#contacts').append('<li><span class="contact">' + newContact.cityCountry() + '</span></li>');

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.cityCountry());
      $(".city").text(newContact.city);
      $(".country").text(newContact.country);
      $(".year").text(newContact.year);
      $(".length").text(newContact.length);
      $(".notes").text(newContact.notes);
   });

    $('input#new-city').val('');
    $('input#new-country').val('');
    $('input#year').val('');
    $('input#length').val('');
    $('input#notes').val('');
  });
});
