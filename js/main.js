const btnClose = document.getElementById('btn-close');


function onClick() {
    const rem1 = document.getElementById('remove-1');
    const rem2 = document.getElementById('remove-2');

    const title = document.getElementById('title');

    rem1.remove();
    rem2.remove();
    title.innerHTML = '0 Announcements';
    btnClose.remove();

}


btnClose.addEventListener('click', onClick)