import { expect, Page } from '@playwright/test'

export class HomePage {

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async clickPoliticaPrivacidad(){
        await this.page.locator('#contact').getByRole('link', { name: 'Política de Privacidad' }).click();
    }

      async verPoliticaPrivacidad(){
        await expect(this.page).toHaveURL(/privacy/);
        await expect(this.page.getByRole('heading', { name: 'Política de Privacidad' })).toBeVisible();
    }

    async clickYoutube(){
       
        await this.page.getByText('YouTube').click();
    
    }

     async verYoutube() {
         const popupPromise = this.page.waitForEvent('popup');
        await this.clickYoutube();
        const youtubePage = await popupPromise;
        await expect(youtubePage).toHaveURL(/youtube\.com/);
}
    




}