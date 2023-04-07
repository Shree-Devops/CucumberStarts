package com.w2.cucumber;

import java.util.HashMap;

import org.openqa.selenium.By;

import Package2.stepDefinition;

public class locators {

	HashMap <String, String> hmap = new HashMap <String, String>();
	
	public locators(String key, String value) {
		hmap.put(key, value);
	}
	
	public void click(String key) {
		System.out.println(key + " locators element clicked!!");
		//driver.findElement(By.xpath(""));

	}
	public void enterText(String key, String value) {
		System.out.println(value + " is enetered in " + key);
	}
}
