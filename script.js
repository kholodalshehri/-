
/*
document.addEventListener('DOMContentLoaded', function() {
    alert('مرحباً بكم في موقعي الشخصي!');
}); 

document.getElementById("myButton").addEventListener("click", function() {
    alert("في همتك  مايبني امتك  ");
});
*/

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };
    const dateTimeString = now.toLocaleDateString('ar-EG', options); // تغيير 'ar-EG' حسب اللغة المطلوبة
    document.getElementById('datetime').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();
