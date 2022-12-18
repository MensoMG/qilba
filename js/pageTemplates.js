class MyHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="Sel">
                    <div class="container">
                        <div class="header__inner">
                            <nav class="nav">
                                <a class="nav__link" href="/index.html">Главная</a>
                                <a class="nav__link" href="/pages/contact.html">Книжный Клуб</a>
                                <a class="nav__link" href="/pages/work.html">VayTalks</a>
                                <a class="nav__link" href="/pages/reviews.html">Рецензии</a>
                                <a class="nav__link" href="/pages/about.html">About us</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        `
    }

}

class MyFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <ul class="social-icon">
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="call-outline"></ion-icon>
                        </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <div class="logo-telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                </svg>
                            </div>
                        </a></li>
                    
                </ul>
                <p>&copy;2022 QILBA CLUB | All Rights Reserved</p>
            </footer>
        `
    }

}

customElements.define('header-template', MyHeader);
customElements.define('footer-template', MyFooter);
