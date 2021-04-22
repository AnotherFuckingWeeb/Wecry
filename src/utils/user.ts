import Cookies from 'universal-cookie'

export class User {
    
    private cookies: Cookies = new Cookies();
    private _id: number = this.cookies.get('id');
    private _wallpaper: string = this.cookies.get('wallpaper');
    private _profileImage: string = this.cookies.get('profileImage');
    private _fistname: string = this.cookies.get('firstname');
    private _lastname: string = this.cookies.get('lastname');
    private _description: string = this.cookies.get('description');
    private _fullname: string = `${this.Firstname} ${this.Lastname}`;
    private _email: string = this.cookies.get('email');
    private _country: string = this.cookies.get('country');
    private _phonenumber: string = this.cookies.get('phonenumber');
    private _isCompany: boolean = this.cookies.get('isCompany');

    public get Id() : number  {
        return this._id;
    }

    public get Wallpaper() : string {
        return `http://localhost:4000/uploads/${this._wallpaper}`;
    }

    public get ProfileImage() : string {
        return `http://localhost:4000/uploads/${this._profileImage}`;
    }

    public get Firstname() : string {
        return this._fistname;
    }

    public get Lastname() : string {
        return this._lastname;
    }

    public get Description() : string {
        return this._description; 
    }

    public get Fullname() : string {
        return this._fullname;
    }

    public get Email() : string {
        return this._email;
    }

    public get Country() : string {
        return this._country;
    }

    public get Phonenumber() : string {
        return this._phonenumber;
    }

    public get isCompany() : boolean {
        return this._isCompany;
    }

    public GetWallpaper() : string {
        return `http://localhost:4000/uploads/${this.Wallpaper}`;
    }

    public LoginUser(id: number, profileImage: string, firstname: string, lastname: string, country: string, email: string, isCompany: boolean) : void {
        if (id !== undefined) this.cookies.set('id', id, { path: '/' });
        this.cookies.set('profileImage', profileImage, { path: '/' });
        this.cookies.set('firstname', firstname, { path: '/' });
        this.cookies.set('lastname', lastname, { path: '/' });
        this.cookies.set('country', country, { path: '/' });
        this.cookies.set('email', email, { path: '/' });
        this.cookies.set('isCompany', isCompany, { path: '/' });            
    }

    public LoginCompany(id: number, wallpaper: string, logo: string, name: string, description: string, phonenumber: string, email: string, isCompany: boolean) : void {
        if (id !== undefined) this.cookies.set('id', id, { path: '/' });
        this.cookies.set('wallpaper', wallpaper, { path: '/' });
        this.cookies.set('profileImage', logo, { path: '/' });
        this.cookies.set('firstname', name, { path: '/' });
        this.cookies.set('description', description, { path: '/' });
        this.cookies.set('phonenumber', phonenumber, { path: '/' });
        this.cookies.set('email', email, { path: '/' });
        this.cookies.set('isCompany', isCompany, { path: '/' });
    }

    public SignOut() : void {
        if (this.isCompany) {
            this.cookies.set('wallpaper', { path: '/' });
            this.cookies.set('profileImage', { path: '/' });
            this.cookies.set('firstname', { path: '/' });
            this.cookies.set('description', { path: '/' });
            this.cookies.set('phonenumber', { path: '/' });
            this.cookies.set('email', { path: '/' });
            this.cookies.set('isCompany', { path: '/' });
        }

        else {
            this.cookies.remove('profileImage', { path: '/' });
            this.cookies.remove('firstname', { path: '/' });
            this.cookies.remove('lastname', { path: '/' });
            this.cookies.remove('country', { path: '/' });
            this.cookies.remove('email', { path: '/' });
            this.cookies.remove('isCompany', { path: '/' });  
        }

        this.cookies.remove('id', { path: '/' })
    }
}