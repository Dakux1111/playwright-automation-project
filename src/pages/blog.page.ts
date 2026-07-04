import { expect, Page } from '@playwright/test'

export class BlogPage {

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

   async clickBlog() {
    await this.page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
    }

    async buscarenBlog(texto: string) {
    await this.page.getByRole('textbox', { name: /Buscar en todos los artículos/i }).fill(texto);
    }

    async verificarBúsquedaBlog(texto: string) {
    await expect(this.page.getByRole('link', { name: new RegExp(texto, 'i') }).first()).toBeVisible();
    }


     }