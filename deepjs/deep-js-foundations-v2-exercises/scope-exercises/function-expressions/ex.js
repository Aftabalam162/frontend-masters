function printRecords(recordIds) {
	// TODO
	
	var studentData = recordIds.map( function getStudentData(studentId ) {
		
		let studentRecord = studentRecords.find(function findStudent (student) {
	    return student.id == studentId;
	})
		
		return studentRecord;
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
	
	var studentsToEnroll = studentRecords.filter(
        function getStudent(student) {
            return student.paid == true && !currentEnrollment.includes(student.id);
        }
        // filtering through the list to find student who paid but yet to enroll
        // it will return an object
    )
    
	studentsToEnroll = studentsToEnroll.map( function getStudentID (record) {
    		return record.id;
	});
	// mapped list of studentIDs
	
    
	studentsToEnroll = [...studentsToEnroll, ...currentEnrollment];
	// included students who have enrolled
	
	return studentsToEnroll;
}

function remindUnpaid(recordIds) {
	// TODO
	
	var studentIDs = recordIds.filter( function unpaidStudents(studentID) {
		let studentRecord =  studentRecords.find( function findStudent (student) {
			return student.id == studentID;
		});
		// finding the student by their respective ID
		
		return !studentRecord.paid && currentEnrollment.includes(studentRecord.id);
		// this will return students who didn't paid but enrolled
	});
	// 
	
	studentIDs.forEach( function remindStudents (studentID) {
	    let studentRecord =  studentRecords.find( function findStudent (student) {
			return student.id == studentID;
		});
		//this will return the student obj by corresponding ID
		console.log(`${studentRecord.name} (${studentRecord.id}): ${studentRecord.paid? "Paid": "Not Paid"}`);
	});
}



// ********************************

// Refactoring code with Arrow Functions wherever possible

function printRecords(recordIds) {
	// TODO
	
	var studentData = recordIds.map( studentId => {
		
		let studentRecord = studentRecords.find(student => {
	    return student.id == studentId;
	})
		
		return studentRecord;
		// using built-in find function to return the obj with specific id
	} );
	
	studentData.sort((studentObj1, studentObj2) => { 
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
	
	studentData.forEach(student => {
		console.log(`${student.name} (${student.id}): ${student.paid? 'Paid': 'Not Paid'}`);	
	});
}

function paidStudentsToEnroll() {
	// TODO
	
	var studentsToEnroll = studentRecords.filter(
        student => {
            return student.paid == true && !currentEnrollment.includes(student.id);
        }
        // filtering through the list to find student who paid but yet to enroll
        // it will return an object
    )
    
	studentsToEnroll = studentsToEnroll.map( record => {
    		return record.id;
	});
	// mapped list of studentIDs
	
    
	studentsToEnroll = [...studentsToEnroll, ...currentEnrollment];
	// included students who have enrolled
	
	return studentsToEnroll;
}

function remindUnpaid(recordIds) {
	// TODO
	
	var studentIDs = recordIds.filter( studentID => {
		let studentRecord =  studentRecords.find(student => {
			return student.id == studentID;
		});
		// finding the student by their respective ID
		
		return !studentRecord.paid && currentEnrollment.includes(studentRecord.id);
		// this will return students who didn't paid but enrolled
	});
	// 
	
	studentIDs.forEach( studentID => {
	    let studentRecord =  studentRecords.find( student => {
			return student.id == studentID;
		});
		//this will return the student obj by corresponding ID
		console.log(`${studentRecord.name} (${studentRecord.id}): ${studentRecord.paid? "Paid": "Not Paid"}`);
	});
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
