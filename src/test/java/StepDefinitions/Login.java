package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login {

    WebDriver driver;

    @Given("^User able to open a Browser$")
    public void user_able_to_open_a_Browser() {
        System.setProperty("webdriver.chrome.driver","C:\\Software\\Driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("^Enter an Url$")
    public void enter_an_Url() {
        driver.get("https://demo.nopcommerce.com/");
    }



    @When("^user click on login link$")
    public void user_click_on_login_link()  {
        driver.findElement(By.className("ico-login")).click();
    }

    @When("^user on login page$")
    public void user_on_login_page() {
        driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div/div/div[1]/h1")).click();
    }

    @Then("^user add an \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_add_an_and(String emailADDress , String Passwords ) {
     driver.findElement(By.id("Email")).sendKeys(emailADDress);
     driver.findElement(By.id("Password")).sendKeys(Passwords);
    }

    @Then("^click on Loginbutton$")
    public void click_on_Loginbutton()  {
        driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div/div/div[2]/div[1]/div[2]/form/div[3]/button")).click();
    }

    @Then("^close a browser$")
    public void close_a_browser() {
        driver.close();
    }




    }




