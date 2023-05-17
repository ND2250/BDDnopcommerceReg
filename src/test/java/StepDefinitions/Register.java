package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Register {

    WebDriver driver;

    @Given("^User able to open a browser$")
    public void user_able_to_open_a_browser()  {
        System.setProperty("webdriver.chrome.driver","C:\\Software\\Driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("^Enter an url$")
    public void enter_an_url()  {
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^user click on register link$")
    public void user_click_on_register_link()  {
        driver.findElement(By.className("ico-register")).click();
    }

    @Then("^user on Register page and verify the register page title$")
    public void user_on_Register_page_and_verify_the_register_page_title() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Register",title);
    }

    @Then("^user select a gender$")
    public void user_select_a_gender()  {
        driver.findElement(By.id("gender-male")).click();
    }

    @Then("^enter a First name Lastname and date of birth$")
    public void enter_a_First_name_Lastname_and_date_of_birth()  {
        driver.findElement(By.id("FirstName")).sendKeys("Nishant");
        driver.findElement(By.id("LastName")).sendKeys("Dhanani");
        driver.findElement(By.name("DateOfBirthDay")).sendKeys("13");
        driver.findElement(By.name("DateOfBirthMonth")).sendKeys("June");
        driver.findElement(By.name("DateOfBirthYear")).sendKeys("1992");
    }

    @Then("^user enter a valid email address and company name$")
    public void user_enter_a_valid_email_address_and_company_name()  {
        driver.findElement(By.id("Email")).sendKeys("nishant.dhanani@gmmail.com");
        driver.findElement(By.id("Company")).sendKeys("ABC limited");
    }

    @Then("^enter a password and  confirm password$")
    public void enter_a_password_and_confirm_password()  {
        driver.findElement(By.id("Password")).sendKeys("Ndnd2250");
        driver.findElement(By.id("ConfirmPassword")).sendKeys("Ndnd2250");
    }

    @Then("^click on register button$")
    public void click_on_register_button() {
        driver.findElement(By.id("register-button")).click();
    }

    @Then("^user close the browser$")
    public void user_close_the_browser() {
        driver.close();
    }

// Data Driven Approach

    @Then("^user select a \"([^\"]*)\"$")
    public void user_select_a(String Gender){
        driver.findElement(By.id("gender-male")).click();
    }

    @Then("^enter a \"([^\"]*)\" \"([^\"]*)\"$")
    public void enter_a(String firstname, String lastname){
        driver.findElement(By.id("FirstName")).sendKeys(firstname);
        driver.findElement(By.id("LastName")).sendKeys(lastname);
    }

    @Then("^enter a \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_a_and(String Day, String Month, String Year) {
        driver.findElement(By.name("DateOfBirthDay")).sendKeys(Day);
        driver.findElement(By.name("DateOfBirthMonth")).sendKeys(Month);
        driver.findElement(By.name("DateOfBirthYear")).sendKeys(Year);
    }

    @Then("^user enter a valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_a_valid_and(String Emailaddress, String Companyname){
        driver.findElement(By.id("Email")).sendKeys(Emailaddress);
        driver.findElement(By.id("Company")).sendKeys(Companyname);

    }

    @Then("^enter a \"([^\"]*)\" and  \"([^\"]*)\"$")
    public void enter_a_and(String Password , String Confirmpassword ){
        driver.findElement(By.id("Company")).sendKeys(Password);
        driver.findElement(By.id("ConfirmPassword")).sendKeys(Confirmpassword);
    }

    @Then("^click on \"([^\"]*)\"$")
    public void click_on(String Registerbutton) {
        driver.findElement(By.id("register-button")).click();
    }


}
