// -- dom elements --
let testDiv = document.getElementById('test');

// on click, load the data through AJAX
testDiv.addEventListener('click', function() {
    console.log('clicked');
    $.ajax({
        url: '/get-stats-productos',
        type: 'GET',
        success: function(response) {
            console.log(response);
            testDiv.innerHTML = "Frutas: " + response.frutas + "%, Verduras: " + response.verduras + "%";
        },
        error: function(error) {
            console.log(error);
        }
    });
});