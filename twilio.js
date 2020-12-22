const twilo= require('twilio');

class Twilo{
    phounNumber = "+972-54-206-8714";
    accountSid="ACa31bbab6af1aeb55e06a24e08c390d65";
    tokinSid="SK2a25250ef02a333f61d8fba0d9e5850c";
    tokinSecret="M4GHPP3SkmudxQJWba0UwunXlOJEAAq3";
    verify="VA0390fb75c69603b0d372f4f456341975";
    APPLICATION_ID="336731";
    client;
    constructor(){
        this.client= twilo(this.tokinSid , this.tokinSecret, {
            accountSid:this.accountSid  
        });
    }
    getTwilo(){
        this.client;
    }
    async sendVerify(to,channel){
        const data= await this.client.verify
        .services(this.verify)
        .verifications.create({
            to,
            channel,
        });
        console.log('sendVerify',data);
        return data
    }
    async verifyCode(to,code){
        const data= await this.client.verify.services(this.verify).verificationChecks.create({
            to,
            code,
        });
        console.log('verfyCode', data);
        return;
    }

}
const instance= new Twilo();
//object.freeze(instance);

module.exports=instance;



