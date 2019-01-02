import Api from '@/services/Api'

export default {
  sendHomeEmail (params) {
    return Api().post('email', params);
  },
  getHomeEmail () {
    return Api().get('email');
  }
}