const increase = document.querySelector('.btn-success');
const decrease = document.querySelector('.btn-danger');
const reset = document.querySelector('.btn-secondary');
const count = document.querySelector('.count');
let n = 0;
increase.addEventListener('click', () => {
    n = n + 1;
    count.innerText = n;
    changeColor(n);

})
decrease.addEventListener('click', () => {

    n = n - 1;
    count.innerText = n;
    changeColor(n);
})

reset.addEventListener('click', () => {
    n = 0;
    count.innerText = n;
    changeColor(n);


})
function changeColor(n) {
    if (n === 0) {
        count.classList.add('text-secondary');
        count.classList.remove('text-success');
        count.classList.remove('text-danger');
    }

    else if (n > 0) {
        count.classList.add('text-success');
        count.classList.remove('text-danger');
        count.classList.remove('text-secondary');
    } else if (n < 0) {
        count.classList.add('text-danger');
        count.classList.remove('text-success');
        count.classList.remove('text-secondary');

    }
}
