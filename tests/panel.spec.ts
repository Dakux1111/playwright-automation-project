import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { DashboardPage } from '../src/pages/dashboard.page';
import { Cookies } from '../src/components/cookiesModal/cookies'
import { navBar } from '../src/components/navbar/navbar';
import  users from '../src/test-data/users.json';

test.describe('Validación Panel', () => {
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

//CP005
test('Ver mi panel', async ({ page }) => {
    await login.loginUser(users.StudentUser.email,users.StudentUser.password)
    await dashboard.clickPanel();
    await dashboard.verificarPanel();
});



});

