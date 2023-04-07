package com.w2.cucumber;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import io.cucumber.testng.CucumberOptions;

@RunWith (Cucumber.class)


@Cucumber.Options (
	    features = "src/Package2/test.feature", //path of feature file 
	    glue = {"Package2"}, // path of step definition file
	    tags ="@tag1"
//	    tags = {"@tag1, @tag2"} // OR execute one of these tags
	    //tags = {"@tag", "@tag1"} // AND execute both of these tags
	    //tags ={"~@SoapUI"}, // exclude these tags
	    //dryRun = true,// will check if there is there is a function for each step in feature file
//	    monochrome =true,//to remove unreadable characters in the console output during execution e.g. [32mGiven [0m[32mI am on the homepage[0m
//	    plugin={"pretty", "html:target/folder_name/report.html"} // to specify formatting options for the output reports in the mentioned location
	    //format = {"html:format"} // pretty - will show pass in green and fail steps in red
	    )
	    
//@Cucumber.Options (format = {"html:format"})
public class testRunner {

}
