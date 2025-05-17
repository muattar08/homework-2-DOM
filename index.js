const whiteBtn = document.querySelector('.btn1');
const greyBtn = document.querySelector('.btn2');
const colorText = document.querySelector('.ipad .item a');

whiteBtn.onclick = function () {
    whiteBtn.style.backgroundColor = '#0071E3';
    whiteBtn.style.color = 'white';

    greyBtn.style.backgroundColor = '#CFE7FF';
    greyBtn.style.color = '#797979';

    colorText.textContent = 'White';
};

greyBtn.onclick = function () {
    greyBtn.style.backgroundColor = '#0071E3';
    greyBtn.style.color = 'white';

    whiteBtn.style.backgroundColor = '#CFE7FF';
    whiteBtn.style.color = '#797979';

    colorText.textContent = 'Space Grey';
};


const priceText = document.querySelector('.ipad .item p');
const storageItems = document.querySelectorAll('.pricec .item');

const basePrice = 1999;

for (let i = 0; i < storageItems.length; i++) {
    storageItems[i].onclick = function () {

      for (let j = 0; j < storageItems.length; j++) {
            storageItems[j].style.borderColor = '#CFE7FF';
        }

        this.style.borderColor = '#0071E3';

        const extraPrice = this.querySelector('.price').textContent;

        if (extraPrice === '') {
            priceText.textContent = `$${basePrice}`;
        } else {
            const added = parseInt(extraPrice.replace('+$', ''));
            priceText.textContent = `$${basePrice + added}`;
        }
    };
}
