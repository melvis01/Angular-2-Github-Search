import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '4fcc26bd6d90e795e920';
    private client_secret='91a60dbb13aeaf51f8315c61e76405f8ba4b354f';
    
    constructor(private _http:Http){
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    
     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    
    updateUser(username:string){
        this.username = username;
    }
}