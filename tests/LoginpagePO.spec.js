import {test,expect} from '@playwright/test';
const {Loginpage} =require('../Pageobjects/LoginPage.js');
test('login page',async({page})=>{
    const loginpage=new Loginpage(page);
    const email1="uniqueujjwal56@gmail.com";
    const password1="Once@321";
      loginpage.goto();     
      loginpage.email.fill(email1);
      loginpage.password.fill(password1);
      loginpage.signin.click();
     await page.waitForLoadState("networkidle");
     const titles=await page.locator(".card-body b").allTextContents();
     //page.waitForTimeout(4000);
    //  await page.locator(".card-body b").first().waitFor();
     console.log(titles);
});
