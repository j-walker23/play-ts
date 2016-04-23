
import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
/**
 * @author john
 * @version 4/11/16 12:34 AM
 */



// interface IResService extends IHttpService {
//   get<T>(url: string, config?: ng.IRequestShortcutConfig): IResPromise<T>;
// }

interface IResPromiseCallbackArg<T> extends ng.IHttpPromiseCallbackArg<T> {
  data?: {
    results: T[]
  }
}

interface IResPromise<T> extends ng.IPromise<IResPromiseCallbackArg<T>> {

}


interface IResultsArray<T extends Model<T>> {
  results: T[]
}

class Model<T> {
  id: string
  created: string
}

class User extends Model<User> {
  suckIt: string
}

class Res<T extends Model<T>> {

  constructor (private $http: ng.IHttpService) {

  }

  one () {
    return this.$http.get<T>('suck')
  }

  list (): IPromise<IHttpPromiseCallbackArg<IResultsArray<T>>> {
    return this.$http.get<IPromise<IHttpPromiseCallbackArg<IResultsArray<T>>>>('suck')
      .then(resp => {
        resp.data.results
      })
  }
}


let $http: ng.IHttpService

let res = new Res<User>($http)

res.one().then(resp => {

})

res.list().then(resp => {
  resp.data.results
})
