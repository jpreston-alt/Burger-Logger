$(function () {

    // render all stars when page loads
    renderAllStars();
    
    // submit new burger
    $("#submit-burger-btn").on("click", function(event) {
        event.preventDefault();

        if ($("#input-burger-name").val().trim() != "") {
            let newBurger = {
                burger_name: $("#input-burger-name").val().trim()
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("new burger added!");
                location.reload();
            });
        } else {
            alert("Please enter valid burger name")
        }
    });

    // devour burger button - updates devoured value to true
    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("burgerid");
        let burgerData = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerData
        }).then(function() {
            console.log("Burger devoured!");
            location.reload();
        });
    });

    // delete burger 
    $(".delete-btn").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("burgerid");
        
        $.ajax("/api/burgers/" + id, {
            type:"DELETE"
        }).then(function() {
            console.log("Burger deleted!")
            location.reload();
        });
    });


    // stars rating
    $(".fa-star").on("click", function (event) {
        event.preventDefault();
        let ratingNum = $(this).data("rating");
        let id = $(this).parent().data("burgerid");

        let burgerData = {
            rating: ratingNum
        };

        renderStars(id, ratingNum);

        $.ajax("/api/burgers/rating/" + id, {
            type: "PUT",
            data: burgerData
        }).then(function () {
            location.reload(); 
        });
    });

    function renderAllStars() {
        $.ajax("/api/burgers", {
            type: "GET",
        }).then(function(data) {
            for (var i = 0; i < data.length; i++) {
                renderStars(data[i].id, data[i].rating);
            }
        });
    };

    // render stars for individual burgers
    function renderStars(id, ratingNum) {
        $(`i.burger${id}`).each(function () {
            $(this).removeClass("checked");
            if ($(this).data("rating") <= ratingNum) {
                $(this).addClass("checked");
            }
        });
    };

});
