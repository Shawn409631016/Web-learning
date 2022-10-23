const app = new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        email: '',
        ticketQuantity: 1,
        ticketType: 'general',
        referrals: [],
        specialRequests: '',
        purchaseAgreementSigned: false,
        requireFieldClass: 'required'
    },

    computed: {
        fullName: function(){
            if(this.firstName && this.lastName){
                return this.firstName + ' ' + this.lastName;
            }else{
                return this.firstName || this.lastName;
            }
        },
        ticketDescription: function(){
            let readableTicketType = 'General Admission';
            if(this.ticketType === 'vip'){
                readableTicketType = 'VIP';
            }
            let ticketPluralization = 'tickets';
            if(this.ticketQuantity === 1){
                ticketPluralization = 'ticket';
            }
            return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
        },
        emailIsValid: function(){
            return this.email.includes('@');
        },
        formIsValid: function(){
            return this.firstName && this.lastName && this.emailIsValid && this.purchaseAgreementSigned;
        },
        emailClasses: function(){
            return {
                touched: this.email.length !== 0,
                invalid: this.email && !this.emailIsValid
            }
        }
    },

    methods: {
        resetFields: function(){
            this.firstName= '';
            this.lastName= '';
            this.email= '';
            this.ticketQuantity= 1;
            this.ticketType= 'general';
            this.referrals= [];
            this.specialRequests= '';
            this.purchaseAgreementSigned= false;
        }
    }

});