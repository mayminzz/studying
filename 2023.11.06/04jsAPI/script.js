// geolocation => 위치를 추적해주는 API
// Window 객체 안에 있는 navigator 객체의 메서드를 사용할 수 있음
// getCurrentPosition : 사용자의 현재 위치를 추적해주는 메서드(함수)
// WatchPositopn : 지정한 시간마다 위치 확인해주는 메서드
// clearWatch : 위치 파악을 요청했으나 특정시간이 지나면 위치 파악을 멈추게 하는 메서드

let showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
  <b>위도 : </b> ${position.coords.latitude.toFixed(
    2
  )}, <b>경도 : </b>${position.coords.longitude.toFixed(2)}
  `;
};

let errPosition = (err) => {
  alert(err.message);
};

const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errPosition);

    const options = {
      // 고정밀도위치 정보를 사용하도록 설정
      enableHighAccuracy: true,
      // 정보를 얻기위한 ㅌ차임아웃
      timeout: 5000,
      //위치정보의 최대수명
      maximumAge: 0,
    };

    let watchID = navigator.geolocation.watchPosition(
      showPosition,
      errPosition,
      options,
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchID);
    }, 300000)
  } else {
    alert("지오로케이션을 지원하지 않습니다!");
  }
});
