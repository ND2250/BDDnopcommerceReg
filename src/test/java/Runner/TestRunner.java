package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        // Path of the feature file where feature file is available
       // features = "C:\\Users\\Nishant Dhanani\\IdeaProjects\\SimpleBDDnopreg\\src\\test\\resources\\Features\\A_Register.Feature",
        features = "C:\\Users\\Nishant Dhanani\\IdeaProjects\\SimpleBDDnopreg\\src\\test\\resources\\Features\\A_Register.Feature",
        // Glue path of the step Definition
        glue = {"StepDefinitions"},
        // Format create a report
        format = {"pretty","html:htmlReport"},
        dryRun = false
)










public class TestRunner {


}
