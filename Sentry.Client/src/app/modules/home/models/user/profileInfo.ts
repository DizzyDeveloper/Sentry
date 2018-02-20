export class ProfileInfo{
    firstname: string;
    middlename: string;
    lastname: string;
    
    nameAbbreviation(){
        return this.firstname.charAt(0)+this.lastname.charAt(0);
    }
}