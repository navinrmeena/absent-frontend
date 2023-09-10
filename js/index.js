//fetch("students.json")
fetch("http://localhost:8000/get_database")
.then(function(response){
	return response.json();
}).then(function(students){
	let placeholder = document.querySelector("#data-output");
	let out = "";
    let id = 0;
	for(let product of students){
		out += `
			<tr id="student-table-row-${id}">
				<td>${product.name}</td>
				<td>${product.branch}</td>
				<td>${product.dob}</td>
				<td>${product.present}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
    console.log("Hello!")
});

function myfun(){
	alert("hello dude")
}
