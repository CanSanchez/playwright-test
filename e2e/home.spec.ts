import { test, expect } from '@playwright/test'

var homePage = 'http://localhost:3002';
var aboutPage = 'http://localhost:3002/about';
var gradesPage = 'http://localhost:3002/grades';

test.beforeAll(async () => {
    console.log('before test')
})

test.afterAll(async () => {
    console.log('after test')
})

test.describe('Head tag area', () => {
    test('Coontains the head tag and its contents', async ({page}) => {
        await page.goto(homePage);
        await expect(page).toHaveTitle('Example #1');

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app');

        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href', '/favicon.ico')
    })
})

test.describe('Main content', () => {
    test('Should contain a heading welcome to my home page', async ({page})=> {
        await page.goto(homePage);
        await expect(page.locator('h1')).toContainText('Welcome to my home page');
    })
    test('Should contain list to describe CRUD', async ({page})=> {
        await page.goto(homePage);
        await expect(page.locator('ul > li')).toContainText(["Create", "Read", "Update", "Delete"]);
    })
    
})

test.describe('Linking to another page', () => {
    test('Should contain a link to about page', async ({page})=> {
        await page.goto(homePage);
        await page.click('text=About Page')
        await expect(page).toHaveURL(aboutPage);
    })
    test('Should contain a link to grades page', async ({page})=> {
        await page.goto(homePage);
        await page.click('text=Grades Page')
        await expect(page).toHaveURL(gradesPage);
    })
    
})

test.describe('Button tests', () => {
    test('This is the info component', async ({page})=> {
        await page.goto(homePage);
        await expect(page.locator('button')).toContainText('View all this info');
    })
})

test.describe('Footer tests', () => {
    test('Should contain a footer on the home page', async ({page})=> {
        await page.goto(homePage);
        await expect(page.locator('footer')).toContainText('In Class Example #1');
    })
})

test.describe('Check about page navigates to home page test', () => {
    test('Should navigate to the home page from the about page', async ({page})=> {
        await page.goto(aboutPage);
        await page.click('text=Go Back')
        await expect(page).toHaveURL(homePage);
    })
})