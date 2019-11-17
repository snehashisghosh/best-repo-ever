/*accountMap.js */

/**
 * CORE LWC LIBRARIES 
 **/
import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class AccountMap extends LightningElement {

    /*PRIVATE REACTIVE PROPERTIES*/
    @track billingStreet; 
    @track mapMarkers;

    @wire(CurrentPageReference) pageRef;     

    /*get the address detail from the pub-sub event.*/
    connectedCallback() {
        //use lifecycle hook here
        registerListener("showAccount", this.handleAddressInfo, this);
    }
    
    /* to unregister all listeners.*/
    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    
    /* to set the Account Id */
    handleAddressInfo(accountRecord) {
        this.billingStreet = accountRecord.Street;

        this.mapMarkers = [
            {
                location: {
                    Street: this.billingStreet,
                    City: accountRecord.City,
                    State: accountRecord.State, 
                },
    
                title: 'Account Location',
                description: 'Account Landmark Identify',
                icon: 'standard:account'
            },
        ];
        
    }

    
    

}