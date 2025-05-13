const {test, expect}=require('@playwright/test');

test('Browsers context playwright test',async({browser})=>{
   const context= browser.newContext();
   const page=await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


})

test.only('Browser without',async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
console.log(page.title());
await page.locator('#username').fill('ujjwalpatel266@gmail.com');
await page.locator('#password').fill('12dadada');

await page.locator("[type= 'submit']").click();
await page.locator("[style='display: block']").textcontent();
console.log(page.locator('strong:has-text("Incorrect") ').textContent());

})

test('browser-automation',async({page})=>{
   await page.goto("https://www.google.com/");
   console.log(page.title());
   await expect(page).toHaveTitle("Google");

})