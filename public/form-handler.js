
document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const studentData = {
        student_id: document.getElementById('student_id').value.trim(),
        first_name: document.getElementById('first_name').value.trim(),
        last_name: document.getElementById('last_name').value.trim(),
        date_of_birth: document.getElementById('dob').value,
        email: document.getElementById('email').value.trim(),
        enrollment_date: document.getElementById('enroll_date').value,
        courses: document.getElementById('courses').value.split(',').map(course => course.trim())
    };

    try {
        const response = await fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        });

        if (response.ok) {
            alert('Student record successfully added!');
            document.getElementById('studentForm').reset();
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (err) {
        alert('Failed to submit student record: ' + err.message);
    }
});
    