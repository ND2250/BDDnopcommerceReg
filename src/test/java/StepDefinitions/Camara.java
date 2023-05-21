package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class Camara {

    WebDriver driver;

    @Given("^USER ABLE TO OPEN A BROWSER$")
    public void user_ABLE_TO_OPEN_A_BROWSER()  {
        System.setProperty("webdriver.edge.driver","C:\\Software\\Driver\\msedgedriver.exe");
        driver = new EdgeDriver();
        driver.manage().window().maximize();
    }

    @Given("^ENTER A URL$")
    public void enter_A_URL()  {
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User click on electronic items$")
    public void user_click_on_electronic_items(){
        driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[2]/a")).click();
    }

    @When("^Click on Camaras photos And Select a Nikon$")
    public void click_on_Camaras_photos_And_Select_a_Nikon() {
        driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div[3]/div/div[2]/div[1]/div/div[1]/div/div/a/img")).click();
        driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div[3]/div/div[2]/div[2]/div[2]/div/div/div[1]/div/div[2]/h2/a")).click();

    }

    @Then("^Add on cart click on shopping basket click on terms and condition$")
    public void add_on_cart_click_on_shopping_basket_click_on_terms_and_condition() {
        driver.findElement(By.xpath("//*[@id=\"add-to-cart-button-14\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"topcartlink\"]/a/span[1]")).click();
        driver.findElement(By.id("termsofservice")).click();
    }

    @Then("^click on checkout$")
    public void click_on_checkout()  {
        driver.findElement(By.name("checkout")).click();
    }

    @Then("^insert an \"([^\"]*)\" \"([^\"]*)\"$")
    public void insert_an(String emailaddress , String password ) {
        driver.findElement(By.className("email")).sendKeys(emailaddress);
        driver.findElement(By.id("Password")).sendKeys(password);
    }

    @Then("^close the Browser$")
    public void close_the_Browser()  {
        driver.close();
    }



}
