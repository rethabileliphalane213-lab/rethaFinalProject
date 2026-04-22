class AuthorNotFoundError extends error{

    constructor(message){
        super (message)
        this.statusCode=404
        this.name="File not found error"
    }
}

module.export={AuthorNotFoundError}