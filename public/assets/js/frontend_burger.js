$(function () {
    
    // submit new burger
    $("#submit-burger-btn").on("click", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#input-burger-name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added!");
            location.reload();
        });
    });


});
