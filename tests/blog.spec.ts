import { test } from '@playwright/test';
import { Cookies } from '../src/components/cookiesModal/cookies'
import { HomePage } from '../src/pages/home.page';
import { BlogPage } from '../src/pages/blog.page';

test.describe('Validación Blog', () =>  {

    let home: HomePage;
    let cookies: Cookies;
    let blog: BlogPage;

    test.beforeEach( async({page}) => {
        home = new HomePage(page);
        blog = new BlogPage(page);
        await page.goto('');
    })

    //CP006
     test.only('Test buscar en blog', async () => { 
    await blog.clickBlog();
    await blog.buscarenBlog('tester');
    await blog.verificarBúsquedaBlog('tester');
    });

    });