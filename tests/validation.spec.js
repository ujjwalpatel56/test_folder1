import {test,expect, chromium} from "@playwright/test";

test.only('validation',async()=>{
    const br=await chromium.launch({channel:'chrome'});
    const context = await br.newContext();
    const page=await context.newPage();
    await page.goto("https://automationexercise.com/login");
    await page.getByPlaceholder("Email Address").fill("testplaywright@gmail.com");
    await page.getByPlaceholder("Password").fill("dasdk");
    await page.getByText("Login");
    await page.pause();


})
test("validation page",async({page})=>{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("https://google.com");
// await page.goBack();
// await page.goForward();
//learnt debug mode type step one by one
//also assertion 
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
//there is something called popup cancellation- accpet
await page.locator('#confirmbtn').click();
page.on('dialog',dialog=>dialog.accept());
await page.locator('#confirmbtn').click();
page.on('dialog',dialog=>dialog.dismiss());
//hovering 
await page.locator('#mousehover').hover();
await page.getByText('Top').click();
await page.waitForTimeout(3000); // Waits for 3 seconds (like setTimeout)


}
)