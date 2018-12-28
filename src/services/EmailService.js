import Api from '@/services/Api'

export default {
  sendEmail () {
    return Api().post('test');
  },
  getEmail () {
    return Api().get('test');
  }
}