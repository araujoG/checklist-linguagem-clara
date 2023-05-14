function recountChecked() {
    let checks = document.getElementsByClassName('checkbox');
    let checked = 0;
    for (let check of checks) {
        if (check.checked) {
            checked = checked + 1;
        };
    };
    document.getElementById('marked-checkboxes').innerHTML = checked;
}

function uncheckAll() {
    var checkboxes = document.getElementsByClassName('checkbox');
    for(let el of checkboxes) {
        el.checked = false;
    }
    this.recountChecked();
}

var numeroCheckboxes = document.getElementsByClassName('checklist-item').length
document.getElementById('total-checkboxes').innerHTML = numeroCheckboxes;

var checkboxes = document.getElementsByClassName('checkbox');

for(let el of checkboxes) {
    el.addEventListener("click", () => {
        this.recountChecked();
    });
};

