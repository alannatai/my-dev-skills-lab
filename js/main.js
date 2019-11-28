//GET STORAGE

const getSkills = localStorage.getItem('skills');
$('#skills-list').html(getSkills);
console.log(localStorage);

//ADD SKILL

function addSkill() {
	const $skill = $('#input-skill').val();
	const $newSkill = $(
		`<li><button id="delete-skill">X</button><span> ${$skill}</span></li>`
	);
	if ($skill) {
		$('#skills-list').append($newSkill); //append skill to list

		localStorage.setItem('skills', $('#skills-list').html()); //set skill list to storage
		console.log(localStorage);

		$('#input-skill').val(''); //reset input
	}
}

//EVENT LISTENERS

$('#add-skill-button').on('click', function() {
	addSkill();
});

$('#input-skill').on('keypress', function(event) {
	if (event.which === 13) { //on enter, add skill
		addSkill();
	}
});

//DELETE LIST ITEM

$('#skills-list').on('click', 'button', function() {
	$(this)
		.closest('li')
		.fadeOut(500, function() {
			$(this).remove(); //remove skill from DOM
			localStorage.setItem('skills', $('#skills-list').html()); //set current list to storage
			console.log(localStorage);
		});
});
