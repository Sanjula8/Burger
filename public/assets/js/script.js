// Created Script file to have Buttons work:

$(function() {
	$(".eatBurger").on("click", function(event) {
		var id = $(this).data("id");

		// Send the PUT request.
		$.ajax("/burgers/" + id, {
			type: "PUT"
		}).then(function() {
			// Reload the page to get the updated list
			location.reload();
		});
	});

	$(".deleteBurger").on("click", function(event) {
		var id = $(this).data("id");

		// Send the PUT request.
		$.ajax("/burgers/" + id, {
			type: "DELETE"
		}).then(function() {
			// Reload the page to get the updated list
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
		// Make sure to preventDefault on a submit event.
		var newBurger = {
			name: $("#inputBurger")
				.val()
				.trim()
		};

		// Send the POST request.
		$.ajax("/burgers/create", {
			type: "POST",
			data: newBurger
		}).then(function() {
			location.reload();
		});
	});
});
