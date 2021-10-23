public with sharing class FetchContact {
    public FetchContact() {

    }
    public List<Contact> getMyContact(){
        List<Contact> conList=[select id, Name from Contact];
        System.debug('Show all Contact'+conList);
        return conList;

    }
   
}
