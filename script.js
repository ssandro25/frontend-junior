
// Sidebar start
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');


document.onclick = function(e) {
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        sidebar.classList.remove('active');
    }
}

toggle.onclick = function()
{
    sidebar.classList.toggle('active');
}

