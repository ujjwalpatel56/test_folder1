class Loginpage{
    constructor(page){
        this.page=page;
        this.email=page.locator("#userEmail");
        this.password=page.locator("#userPassword");
        this.signin=page.locator("input[value='Login']");
        
}
async goto(){
    await this.page.goto("https://rahulshettyacademy.com/client/");
}

async validlogin(email,password){
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signin.click();
}

}

module.exports={Loginpage};