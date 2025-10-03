import {test,expect} from '@playwright/test';
test('child windows',async({browser})=>{
    const context =await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink=page.locator("[href*='documents-request']");
    const [newpage]=await Promise.all([context.waitForEvent('page'),
    documentlink.click()]);
    const text= await newpage.locator(".red").textContent();
    const arraytext=text.split("@");
    const domain=arraytext[1].split(" ")[0];

    console.log(text);
    console.log(domain);
    page.pause();
    // Save authentication state after login
    await context.storageState({ path: 'auth.json' });
    const username=page.locator("#username");

    await username.fill(domain);
    page.pause();
    

})