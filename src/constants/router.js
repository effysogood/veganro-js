export const PATH = {
  MAIN: '/',
  AUTH: '/auth',
  SIGNUP: '/signup',
  SEARCH: '/search',
  REVIEW: '/place/:placeid/review',
  ADDPLACE: '/add',
  PLACELISTS: '/places',
  PLACEDETAIL: '/place/:placeid',
  MY: `/user/:userid`, // 주석 처리 /${userid}
  MYEDIT: '/user/:userid/edit',
  NOTFOUND: '*',
};
