package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        // Path of the feature file where feature file is available

        // features = "C:\\Users\\Nishant Dhanani\\IdeaProjects\\SimpleBDDnopreg\\src\\test\\resources\\Features\\B_Login.Feature",
       // features = "C:\\Users\\Nishant Dhanani\\IdeaProjects\\SimpleBDDnopreg\\src\\test\\resources\\Features\\A_Register.Feature",
        //features = ".",tags = "@Login",
        // features = ".", tags = "@E2E",
      //  features = "C:\\Users\\Nishant Dhanani\\IdeaProjects\\SimpleBDDnopreg\\src\\test\\resources\\Features\\Product.Feature",
        //features = "C:\\Users\\Nishant Dhanani\\IdeaProjects\\SimpleBDDnopreg\\src\\test\\resources\\Features",
       // features = ".",tags = {"@Regression,@Sanity"},
        features = ".", tags = "@Purchase",
        // Glue path of the step Definition
        glue = {"StepDefinitions"},
        // Format create a report
    //    format = {"pretty","html:htmlReport"},
       dryRun = false
)










public class TestRunner {


}
