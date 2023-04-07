package com.w2.cucumber;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions (
	    features = "src/Package2/test.feature", //path of feature file 
	    glue = {"Package2"}, // path of step definition file
	    tags ="@shree"
	    //tags = {"@tag1, @tag2"} // OR execute one of these tags
	    //tags = {"@tag", "@tag1"} // AND execute both of these tags
	    //tags ={"~@SoapUI"}, // exclude these tags
	    //dryRun = true,// will check if there is there is a function for each step in feature file
	    //plugin={"html:Folder_Name"} // to specify formatting options for the output reports in the mentioned location
	   //format = {"html:format"}
	    )

public class TestNgTestRunner extends AbstractTestNGCucumberTests{

}
