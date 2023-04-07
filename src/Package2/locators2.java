package Package2;

import java.util.HashMap;

import org.openqa.selenium.By;

public class locators2 {

	HashMap <String, String> hmap = new HashMap <String, String>();
	
	public locators2(String key, String value) {
		hmap.put("name", "shree");
	}
	
	public void click(String key) {
		System.out.println(key + " locators2 element clicked!!");
		//driver.findElement(By.xpath("")).click();
	}
	public void enterText(String key, String value) {
		System.out.println(value + " is enetered in " + key);
	}
	
}
