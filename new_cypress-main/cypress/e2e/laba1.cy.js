describe('Автотесты для формы логина и пароля', function () {                               // название набора тестов
   it('e2e тест на проверку позитивного кейса авторизации', function () {   // название теста
        cy.visit('https://login.qa.studio/');                          // переходим на сайт login.qa.studio
        cy.get('#mail').type('USER_LOGIN');      // вводим логин
        cy.get('#loginButton').should('be.disabled');   // check кнопка Войти некликабельная
        cy.get('#pass').type('USER_PASSWORD');    // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');   // check кнопка Войти кликабельная
        // cy.get('button[type="submit"]').click();   // нажимаем кнопку Подтвердить
        cy.get('#loginButton').click();   // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // Окно сообщения отображается
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем надпись Авторизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик закрыть окно
    });
   it('e2e тест на проверку логики восстановления пароля', function () {   // название теста
        cy.visit('https://login.qa.studio/');    // переходим на сайт login.qa.studio
        cy.get('#forgotEmailButton').click();   // Переходим по ссылке восстановления пароля
        cy.get('#mailForgot').type('E-MAIL'); // Вводим почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажимаем кнопку отправить пароль на e-mail
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем надпись Успешно отправили пароль на e-mail
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик закрыть окно
    });

   it('e2e тест на проверку негативного кейса авторизации - неверный пароль', function () {   // название теста
        cy.visit('https://login.qa.studio/');                          // переходим на сайт login.qa.studio
        cy.get('#mail').type('USER_LOGIN');      // вводим логин
        cy.get('#loginButton').should('be.disabled');   // check кнопка Войти некликабельная
        cy.get('#pass').type('USER_PASSWORD_WRONG');    // вводим пароль
        cy.get('#loginButton').should('be.enabled');   // check кнопка Войти кликабельная
        // cy.get('button[type="submit"]').click();   // нажимаем кнопку Подтвердить
        cy.get('#loginButton').click();   // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // Окно сообщения отображается
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем надпись Авторизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик закрыть окно
    });
   it('e2e тест на проверку негативного кейса авторизации - неверный логин', function () {   // название теста
        cy.visit('https://login.qa.studio/');                          // переходим на сайт login.qa.studio
        cy.get('#mail').type('USER_LOGIN_WRONG');      // вводим неверный логин
        cy.get('#loginButton').should('be.disabled');   // check кнопка Войти некликабельная
        cy.get('#pass').type('USER_PASSWORD');    // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');   // check кнопка Войти кликабельная
        // cy.get('button[type="submit"]').click();   // нажимаем кнопку Подтвердить
        cy.get('#loginButton').click();   // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // Окно сообщения отображается
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем надпись Авторизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик закрыть окно
    });
   it('e2e тест на проверку негативный кейс валидации', function () {   // название теста
        cy.visit('https://login.qa.studio/');                          // переходим на сайт login.qa.studio
        cy.get('#mail').type('USER_LOGIN_WITHOUT_@');      // вводим логин без @
        cy.get('#loginButton').should('be.disabled');   // check кнопка Войти некликабельная
        cy.get('#pass').type('USER_PASSWORD');    // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');   // check кнопка Войти кликабельная
        // cy.get('button[type="submit"]').click();   // нажимаем кнопку Подтвердить
        cy.get('#loginButton').click();   // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // Окно сообщения отображается
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем надпись Авторизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик закрыть окно
    });
   it('e2e тест на приведения логина к строчным буквам бэкендом', function () {   // название теста
        cy.visit('https://login.qa.studio/');                          // переходим на сайт login.qa.studio
        cy.get('#mail').type('UsEr_LoGiN');      // вводим логин разными строчными и заглавными буквами
        cy.get('#loginButton').should('be.disabled');   // check кнопка Войти некликабельная
        cy.get('#pass').type('USER_PASSWORD');    // вводим верный пароль
        cy.get('#loginButton').should('be.enabled');   // check кнопка Войти кликабельная
        // cy.get('button[type="submit"]').click();   // нажимаем кнопку Подтвердить
        cy.get('#loginButton').click();   // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // Окно сообщения отображается
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем надпись Авторизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик закрыть окно
    });
});