const arrayFields = Array.from(document.querySelectorAll('.field'));

for(let i = 0; i < arrayFields.length; i++){
    function poleClick() {
        if (document.getElementById('field' + [i + 1]).className == 'field field_goblin') {
            document.querySelector('.dead').textContent++;
        } else if (document.getElementById('field' + [i + 1]).className == 'field') {
            document.querySelector('.lost').textContent++;
        }
    }

    document.getElementById('field' + [i + 1]).onclick = poleClick;
};