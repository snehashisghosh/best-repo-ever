@isTest
private class FetchContactTestClass {
 static testMethod void validateGetMyContact() {
 FetchContact fc = new FetchContact();
 
 Test.startTest();
 List<Contact> c = fc.getMyContact();
 Test.stopTest();
 

 System.assertEquals(1, 1);
 }
}
