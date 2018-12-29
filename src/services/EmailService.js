import Api from '@/services/Api'

export default {
  sendEmail (params) {
    return Api().post('test', params);
  },
  getEmail () {
    return Api().get('test');
  }
}