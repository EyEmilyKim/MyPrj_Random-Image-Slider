const maxImages = 24; // 전체 이미지 개수
const imageFolderPath = 'images/'; // 이미지 폴더 경로

const counterElement = document.getElementById('imageCount'); // 카운트를 표시할 span 요소
const totalElement = document.getElementById('imageTotal'); // 전체 이미지 수를 표시할 span 요소
totalElement.textContent = maxImages; // 전체 수 HTML 업데이트

let imageCount = 0; // 이미지 카운트를 저장할 변수

let currentImageIndex;

function getRandomImageIndex() {
  let newIndex = Math.floor(Math.random() * maxImages) + 1; // 1부터 maxImages 사이의 랜덤한 숫자 생성
  while (newIndex === currentImageIndex) {
    newIndex = Math.floor(Math.random() * maxImages) + 1;
  }
  return newIndex;
}

function displayRandomImage() {
  const imageElement = document.getElementById('displayImage');

  currentImageIndex = getRandomImageIndex();

  const randomImagePath = `${imageFolderPath}card-${currentImageIndex}.png`;

  imageElement.src = randomImagePath;

  // 이미지를 변경할 때마다 이미지 카운트를 증가시킴
  imageCount++;
  counterElement.textContent = imageCount; // 카운트를 HTML에 업데이트
}

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', () => {
  console.log('nextButton clicked');
  displayRandomImage();
});

// 페이지 로딩 시 초기 이미지 표시
console.log('page loaded');
displayRandomImage();
