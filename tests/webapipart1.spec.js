const {test, expect, request} = require('@playwright/test');
//const {APiUtils} = require('../utils/APiUtils');
const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
let token;
 
 
let response;
// test.beforeAll( async()=>
// {
//    const apiContext = await request.newContext();
//    const apiUtils = new APiUtils(apiContext,loginPayLoad);
//    response =  await apiUtils.createOrder(orderPayLoad);
 
// })
test.beforeAll('Login API Test', async () => {
    const apiContext=await request.newContext();
    const loginresponse=await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: loginPayLoad
    });
    expect(loginresponse.ok()).toBeTruthy();
    const loginresponseJson=await loginresponse.json();
    
    token= loginresponseJson.token;

    console.log(token);
 

});
 
test('waiting flaky',async({page})=>{ 
        page.addInitScript(value => {
     
            window.localStorage.setItem('token',value);
        }, token );
    await page.goto("https://rahulshettyacademy.com/client");


    await page.goto("https://rahulshettyacademy.com/client");
    // const username=page.locator("#userEmail");
    // const password=page.locator("#userPassword");
    //  await username.fill("uniqueujjwal56@gmail.com");
    //  await password.fill("Once@321");
    //  await page.locator("[value='Login']").click();
    //  await page.waitForLoadState("networkidle");
    await page.getByRole('button', { name: ' Add To Cart' }).first().click();
    await page.getByRole('button', { name: ' Add To Cart' }).second().click();

    // await page.waitForLoadState("networkidle");
    
    // const rows = await page.locator("tbody tr");
     
     
}
 )

 
//create order is success
// test('@API Place the order', async ({page})=>
// { 
//     page.addInitScript(value => {
 
//         window.localStorage.setItem('token',value);
//     }, response.token );
// await page.goto("https://rahulshettyacademy.com/client");
//  await page.locator("button[routerlink*='myorders']").click();
//  await page.locator("tbody").waitFor();
// const rows = await page.locator("tbody tr");
 
 
// for(let i =0; i<await rows.count(); ++i)
// {
//    const rowOrderId =await rows.nth(i).locator("th").textContent();
//    if (response.orderId.includes(rowOrderId))
//    {
//        await rows.nth(i).locator("button").first().click();
//        break;
//    }
// }
// const orderIdDetails =await page.locator(".col-text").textContent();
// //await page.pause();
// expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
// });
 