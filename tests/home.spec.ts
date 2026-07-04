import { test } from '@playwright/test';
import { Cookies } from '../src/components/cookiesModal/cookies'
import { HomePage } from '../src/pages/home.page';

//CASO DE PRUEBA CREADA: CP002, CP003, CP004
test.describe('Validación Home', () =>  {

    let home: HomePage;
    let cookies: Cookies;

    test.beforeEach( async({page}) => {
        home = new HomePage(page);
        await page.goto('');
    })
    test('Test ir a Política de Privacidad', async () => { 
    await home.clickPoliticaPrivacidad();
    await home.verPoliticaPrivacidad();
    });

      test.only('Test Ir a Youtube', async () => { 
    await home.verYoutube();
    //await dashboard.isAdminPanel();
    });
     //  test('Test Cambiar de Idioma', async () => { 
    //await login.loginUser(users.adminUser.email,users.adminUser.password)
    //await dashboard.isAdminPanel();
    //});

  



    });