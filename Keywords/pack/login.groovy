package pack

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class login {
	@Keyword
	public static void loginin() {
		WebUI.click(findTestObject('Object Repository/Page_Swag Labs/html_function(n)if(n.search1)var an.search._7b5061'))

		WebUI.click(findTestObject('Object Repository/Page_Swag Labs/div_Password for all userssecret_sauce'))

		WebUI.click(findTestObject('Object Repository/Page_Swag Labs/div_Accepted usernames arestandard_userlock_0ab16f'))

		WebUI.setText(findTestObject('Object Repository/Page_Swag Labs/input_standard_userlocked_out_userproblem_u_db77ac'), GlobalVariable.user)

		WebUI.click(findTestObject('Object Repository/Page_Swag Labs/div_Password for all userssecret_sauce'))

		WebUI.setText(findTestObject('Object Repository/Page_Swag Labs/input_standard_userlocked_out_userproblem_u_3423e9'),
				GlobalVariable.password)
		
		WebUI.click(findTestObject('Object Repository/loginin/Page_Swag Labs/input_standard_userlocked_out_userproblem_u_0dff71'))
	}
}
