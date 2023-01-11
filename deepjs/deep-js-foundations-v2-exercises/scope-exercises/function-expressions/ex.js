function printRecords(recordIds) {
	// TODO
	
	var studentData = recordIds.map( function getStudentData(studentId ) {
		// getting each student through the map to return each student object
		return studentRecords.find( function studentById (student) { return student.id == studentId })
		// using built-in find function to return the obj with specific id
	} );
	
	studentData.sort(function sortStudent(studentObj1, studentObj2) { 
		let studentName1 = studentObj1.name.toUpperCase();
		let studentName2 = studentObj2.name.toUpperCase();
		// this is done to avoid case issues
		
		if (studentName1 < studentName2) {
			return -1;
		}
		
		if (studentName1 > studentName2) {
			return 1;
		}
		
		return 0;
		
		// Read more about array of objects here: 
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
		
	});
	
	studentData.forEach(function printEachStudent(student) {
		console.log(`${student.name} (${student.id}): ${student.paid? 'Paid': 'Not Paid'}`);	
	});
}

function paidStudentsToEnroll() {
	// TODO
	
	var studentsToEnroll = studentRecords.map( function paidNotEnroll(student) {
		if (student.paid && !currentEnrollment.includes(student.id)) {
			return student.id;
		}
	});
	
	var paidStudents = [...currentEnrollment, ...studentsToEnroll];
	
	paidStudents.forEach(function logEnrolledStudents(student) {
		let studentRecord = studentRecords.find( function getStudentData( studentObj ) { return studentObj.id == student })
		console.log(`${student.name} (${student.id}): ${student.paid? "Paid": "Not Paid"}`);
	});
	
	
}

function remindUnpaid(recordIds) {
	// TODO
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
