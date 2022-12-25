const OVERLAP = 0.25; // ширина
const ROTATION = 45; // градусы
const DELAY = 250; // миллисукунды для различных анимаций
const SCALE = 1.7; // для случая, когда карта переворачивается на другую сторону
const SWIPE = 75; // пиксели - минимальная длина мазка

// --- глобыльные переменные

var content = [ ...document.querySelectorAll('div.content')];
var index = Math.floor(content.length / 2);

// --- переворачивает элемент

function action_flip(show) {
    let current = content[index];
    let shown = current.classList.contains('selected');
    let change = false;

    if (show && !shown) {
        change = true;
        current.classList.add('selected');
        current.style.transform = `rotateY(180deg) rotateZ(90deg) scale(${ SCALE })`;
    }
    else if (shown && !show)
    {
        change = true;
        current.style.transform = 'rotateY(0deg)';
        setTimeout (() => { current.classList.remove('selected') }, DELAY);
    }

    return change;
}

// --- двигает предыдущий элемент

function action_prev() {
    if (index) {
        index--;
        action_flow();
    }
}

// --- перемещает к следующему элементу

function action_next() {
    if (content.length > (index + 1)) {
        index++;
        action_flow();
    }
}

// --- переход к указанному элементу

function action_goto(i) {
    if (index !== i) {
        index = i;
        action_flow();
    }
}

// --- изменить цвет элементов

function action_flow() {
    content.forEach((c, i) =>  {
        let transform = '';
        let zindex = '';
        let offset = c.clientWidth * OVERLAP;

        if (i < index) {
            transform = `translateX(-${ offset * (index - i) }%) rotateY(${ ROTATION }deg)`;
            zindex = i;
        }

        else if (i === index) {
            transform = 'rotateY(0deg) translateZ(140px)';
            zindex = content.length;
        }

        else /* if (i > index) */ {
            transform = `translateX(${ offset * (i - index) }%) rotateY(-${ ROTATION }deg)`;
            zindex = content.length - i;
        }

        c.style.transform = transform;
        c.style.zIndex = zindex;
        c.classList.remove('current');
    });

    setTimeout (() => { content[index].classList.add ('current') }, DELAY);
}

// --- государственное управление

function state(event, context) {

    if (event === 'left') {
        action_flip(false) || action_prev();
    }

    else if (event === 'right') {
        action_flip(false) || action_next();
    }

    else if (event === 'select') {
        context === index ?  action_flip(true) : (action_flip(false) || action_goto(context));
    }

    else if (event === 'submit') {
        action_flip(true);
    }

    else if (event === 'dismiss') {
        action_flip(false);
    }

    else {
        // do nothing here
    }
}

// --- управление событиями

function events() {

    document.addEventListener('keydown', event => {
        const EVENTS = {
            ArrowLeft: 'left',
            ArrowRight: 'right',
            Enter: 'submit',
            Backspace: 'dismiss',
            Escape: 'dismiss'
        };

        state(EVENTS[event.key]);
    });

    document.addEventListener('mouseup', event => {
        if (event.target.classList.contains('coverflow')) state('dismiss');
    });

    let touched = 0

    document.addEventListener('touchstart', event => {
        touched = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', event => {
        let moved = touched - event.changedTouches[0].screenX;
        if (moved < 0 && Math.abs(moved) > SWIPE) state('left');
        if (moved > 0 && Math.abs(moved) > SWIPE) state('right');
    });
  
    addEventListener('resize', (event) => { action_flow() });
}

// --- инициализация 

function init() {

    content.forEach((c, i) =>  {
        c.onclick = () => { state('select', i) };
        c.style.zIndex = index === i ? 1 : 0;
    });

    setTimeout (() => { action_flow() }, DELAY);
    events();
}

init();
