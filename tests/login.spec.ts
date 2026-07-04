import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { DashboardPage } from '../src/pages/dashboard.page';
import { Cookies } from '../src/components/cookiesModal/cookies'
import { navBar } from '../src/components/navbar/navbar';
import  users from '../src/test-data/users.json';

test.describe('Login in Testarudo platform', () => {
 
let login: LoginPage
let dashboard: DashboardPage;
let menu: navBar;
let cookies: Cookies;

test.beforeEach( async({page}) => {
  login = new LoginPage(page);
  cookies = new Cookies(page);
  menu = new navBar(page);
  dashboard = new DashboardPage(page);
    await page.goto('');
    await cookies.clickAcceptCookies();
    await menu.clickLoginSection();
})

test('Test Login Admin', async () => { 
  await login.loginUser(users.adminUser.email,users.adminUser.password)
  await dashboard.isAdminPanel();
});

test('Test Login User', async () => { 
  await login.loginUser(users.StudentUser.email,users.StudentUser.password)
  await dashboard.isStudentPanel();
});

test('Test Login Admin URL', async () => { 
  await login.loginUser(users.adminUser.email,users.adminUser.password)
  await dashboard.isAdminLogged();
});

test('Test Login User URL', async () => { 
  await login.loginUser(users.StudentUser.email,users.StudentUser.password)
  await dashboard.isStudentLogged();
});
//CASO DE PRUEBA CREADA: CP001
test('Test Login User Fake', async () => { 
  await login.loginUser(users.FakeUser.email,users.FakeUser.password)
  await login.isFakeUser();
});


});
