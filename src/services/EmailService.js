import Api from '@/services/Api'

export default {
  sendHomeEmail (params) {
    return Api().post('home-email', params);
  },
  getHomeEmail () {
    return Api().get('home-email');
  }
}