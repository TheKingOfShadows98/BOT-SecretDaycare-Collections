export class User{
    user_id;
    diapers =[];

    /**
     *
     */
    constructor(user_id) {
        this.user_id = user_id;
        this.diapers = [];
    }
}