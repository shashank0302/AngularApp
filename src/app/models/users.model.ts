export interface Users{
    id:number;
    email:string;
    name:string;
    profilePic:string;
    address:{
        street:string;
        area:string;
        city:string;
        zipcode:string;
    };
    profession: string;
    mobileno: string;
    

}