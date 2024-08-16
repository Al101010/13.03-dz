function createH1(textTitle) {
    const title = document.createElement('h1');
    title.classList = 'titleH1';
    title.textContent = textTitle;

    document.querySelector('body').prepend(title);
}

createH1('игра: Убей гоблина');