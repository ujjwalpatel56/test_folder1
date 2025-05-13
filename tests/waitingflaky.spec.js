import {test,expect} from "@playwright/test";

test('waiting flaky',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    const username=page.locator("#userEmail");
    const password=page.locator("#userPassword");
     await username.fill("uniqueujjwal56@gmail.com");
     await password.fill("Once@321");
     await page.locator("[value='Login']").click();
     await page.waitForLoadState("networkidle");
     const titles=await page.locator(".card-body b").allTextContents();
     await page.locator(".card-body b").first().waitFor();
     console.log(titles);
     
     
}
 )