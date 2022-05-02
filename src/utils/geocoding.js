import axios from 'axios';
const GeoCoding = async addr => {
  const REST_API_KEY = 'd1bb811b1e5f6699dd0bd4335a8a3e18';
  try {
    const res = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address?query=${addr}`,
      {
        headers: {Authorization: `KakaoAK ${REST_API_KEY}`},
      },
    );
    // console.log('x==', res.data.documents[0].x);
    // console.log('y==', res.data.documents[0].y);
    return {x: res.data.documents[0].x, y: res.data.documents[0].y};
  } catch (err) {
    console.log('err==', err);
    return err;
  }
};

export default GeoCoding;
