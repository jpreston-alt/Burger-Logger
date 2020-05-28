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

    // devour burger button - updates devoured value to true
    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("burgerid");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function() {
            console.log("burger devoured!");
            location.reload();
        });
    });

});
