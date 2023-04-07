package Package2;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.WebDriver;

import com.w2.cucumber.locators;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
	
	//@Before(order = int) : This runs in increment order, means value 0 would run first and 1 would be after 0.
	//@After(order = int) : This runs in decrements order, value 1 would run first and 0 would be after 1.
	//even in case of test fail, after hook will execute
	/*
	public WebDriver driver;
	locators lc = new locators(null, null);
	
	@Before(order = 1)
    public void beforeScenario(){
        System.out.println("This will run before the every Scenario");
        lc.click("name");
    }
    */
	@Before("@tag11")
	public void before() {
		System.out.println("before");
	}
	@After("@tag11")
	public void after() {
		System.out.println("after");
	}
	@Given("^User is on \"([^\"]*)\" page$")
	public void login(String page) {
		System.out.println(page + " page opened");
	}
	@When("^User enters ([a-zA-Z]{1,}) string$")
	public void dataFromDatatable(String username) {
		System.out.println("username " + username + " entered");
	}
	@And("^User enters password$")
	public void password() {
		System.out.println("password entered");
	}
	@Then("^User clicks on ([a-zA-Z]{1,}) button$")
	public void submit(String button) {
		System.out.println(button + " button clicked");
	}
	@Then("^User navigates to \"([a-zA-Z]{1,})\" page$")
	public void nextPage(String page) {
		System.out.println(page + " page opened");
	}
	@Then("^User enters details from Datatable without header$")
	public void dataFromDatatableWithoutHeader(DataTable table ) {
		
		List<List<String>> lists = table.raw();
		System.out.println(lists);
		for (List<String> list : lists) {
			System.out.println("Username- " + list.get(0) + ", Password- " + list.get(1));
		}
	}
	
}