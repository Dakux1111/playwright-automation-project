import { test } from '@playwright/test';
import { Cookies } from '../src/components/cookiesModal/cookies'
import { HomePage } from '../src/pages/home.page';

//CASO DE PRUEBA ASIGNACIÓN: 
test.describe('Validación Home', () =>  {

    let home: HomePage;
    let cookies: Cookies;

    test.beforeEach( async({page}) => {
        home = new HomePage(page);
        await page.goto('');
    })

    //CP002
    test('Test ir a Política de Privacidad', async () => { 
    await home.clickPoliticaPrivacidad();
    await home.verPoliticaPrivacidad();
    });

    //CP003
      test('Test Ir a Youtube', async () => { 
      await home.verYoutube();
    //await dashboard.isAdminPanel();
    });

    //CP004
      test('Test Cambiar de Idioma', async () => { 
      await home.clickIdioma();  
      await home.verificarcambioIdioma();
    });

      
  


  



    });