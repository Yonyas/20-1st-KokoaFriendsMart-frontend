# Kokoa Friends Mart

[카카오 프렌즈 골프](https://www.kakaofriendsgolf.com) 클론 프로젝트

## 🖥 프로젝트 요약

- 프로젝트 진행 기간: 2주일 (2021.05.10 ~ 2021.05.21)
- 카카오VX의 골프 용품 전문 [KAKAO FRIENDS GOLF](https://www.kakaofriendsgolf.com)을 프론트엔드(React.js), 백엔드(Django)를 기반으로 클론하는 프로젝트
- 클론 타겟 사이트의 구성과 틀은 가져오되, 카테고리를 Mart로 피보팅했으며 사용하는 캐릭터와 상품 내용은 직접 제작해 구성
- [프로젝트 후기 블로그 링크](https://velog.io/@yonyas/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-React%EC%B9%B4%EC%B9%B4%EC%98%A4-%ED%94%84%EB%A0%8C%EC%A6%88-%EA%B3%A8%ED%94%84)

## 🖥 프로젝트 상세 내용

### 👩🏻‍💻 [프론트엔드](https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsMart-frontend)

### 폴더구조
```
.
├── Components
│   └── ProductItem
│       ├── ProductItem.js
│       ├── ProductItem.scss
│       └── README.md
├── Pages
│   ├── Cart
│   │   ├── Components
│   │   │   ├── CheckBoxHeader
│   │   │   │   ├── CheckBoxHeader.js
│   │   │   │   └── CheckBoxHeader.scss
│   │   │   ├── FreeDeliveryBar
│   │   │   │   ├── FreeDeliveryBar.js
│   │   │   │   └── FreeDeliveryBar.scss
│   │   │   ├── ProductInCart
│   │   │   │   ├── ProductInCart.js
│   │   │   │   └── ProductInCart.scss
│   │   │   └── TotalPriceBox
│   │   │       ├── TotalPriceBox.js
│   │   │       └── TotalPriceBox.scss
│   │   ├── Cart.js
│   │   └── Cart.scss
│   ├── Category
│   │   ├── Category.js
│   │   └── Category.scss
│   ├── Footer
│   │   ├── Footer.js
│   │   └── Footer.scss
│   ├── Login
│   │   ├── Login.js
│   │   ├── Login.scss
│   │   ├── Signup.js
│   │   └── Signup.scss
│   ├── Main
│   │   ├── Components
│   │   │   ├── BestItem
│   │   │   │   ├── BestItem.js
│   │   │   │   ├── BestItem.scss
│   │   │   │   ├── BestProductItem.js
│   │   │   │   ├── BestProductItem.scss
│   │   │   │   └── sprite.png
│   │   │   ├── Carousel
│   │   │   │   ├── Carousel.js
│   │   │   │   ├── Carousel.scss
│   │   │   │   ├── CarouselCard.js
│   │   │   │   └── CarouselData.js
│   │   │   ├── LikePick
│   │   │   │   ├── LikePick.js
│   │   │   │   └── LikePick.scss
│   │   │   ├── Mdpick
│   │   │   │   ├── Mdpick.js
│   │   │   │   └── Mdpick.scss
│   │   │   └── Nav
│   │   │       ├── Characters
│   │   │       │   ├── Characters.js
│   │   │       │   └── Characters.scss
│   │   │       ├── CharactersList
│   │   │       │   ├── CharactersList.js
│   │   │       │   └── CharactersList.scss
│   │   │       ├── NavItems
│   │   │       │   ├── ElecItems
│   │   │       │   │   ├── ElecItems.js
│   │   │       │   │   └── ElecItems.scss
│   │   │       │   ├── LivingItems
│   │   │       │   │   ├── LivingItems.js
│   │   │       │   │   └── LivingItems.scss
│   │   │       │   └── WearItems
│   │   │       │       ├── WearItem.scss
│   │   │       │       └── WearItems.js
│   │   │       ├── Nav.js
│   │   │       ├── Nav.scss
│   │   │       ├── Search.js
│   │   │       └── Search.scss
│   │   └── Main.js
│   ├── Orderlist
│   │   ├── OrderItem.js
│   │   ├── Orderlist.js
│   │   └── Orderlist.scss
│   ├── Payment
│   │   ├── OrderProductIItem.js
│   │   ├── Payment.js
│   │   └── Payment.scss
│   └── Product
│       ├── components
│       │   ├── ProductDetail
│       │   │   ├── ProductDetail.js
│       │   │   └── ProductDetail.scss
│       │   ├── ProductOption
│       │   │   ├── ProductOption.js
│       │   │   └── ProductOption.scss
│       │   ├── ProductQna
│       │   │   ├── ProductQna.js
│       │   │   └── ProductQna.scss
│       │   └── ProductReview
│       │       ├── Components
│       │       │   ├── StarRatyGrey
│       │       │   │   ├── StarRatyGrey.js
│       │       │   │   └── StarRatyGrey.scss
│       │       │   └── StarRatyYellow
│       │       │       ├── StarRatyYellow.js
│       │       │       └── StarRatyYellow.scss
│       │       ├── ProductReview.js
│       │       └── ProductReview.scss
│       ├── Product.js
│       └── Product.scss
├── Styles
│   ├── _mixin.scss
│   ├── _variables.scss
│   ├── common.scss
│   └── reset.scss
├── config.js
├── index.js
└── Routes.js
 ```
#### 페이지별 기능 DEMO

##### 회원가입 / 로그인 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/Signup&Login.gif?raw=true'/>

##### 메인 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/MainPage.gif?raw=true'/>

##### 카테고리 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/CategoryPage.gif?raw=true'/>

##### 제품 상세 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/DetailPage.gif?raw=true'/>

##### 제품 상세 페이지 -> 주문하기 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/DetailPage_to_PaymentPage.gif?raw=true'/>

##### 장바구니 페이지 -> 주문하기 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/CartPage_to_PaymentPage.gif?raw=true'/>

#### **팀원 별 구현 내역**

프론트엔드 4명, 백엔드 2명

(내가 기여한 기능 볼드체 표시)

- 로그인, 회원가입, **로그아웃** 기능
- 네브바 서치 기능
- 메인페이지 슬라이더 및 MD's pick 레이아웃 구현
- **메인페이지 Best item 구현**
- **카테고리페이지 레이아웃 구현**
- **카테고리페이지 페이지네이션**
- **최신순, 인기순, 가격순 필터 기능**
- 좋아요 토글 기능
- **동적라우팅을 이용한 상품 클릭시 상세페이지로 이동 기능**
- 상세페이지 레이아웃 구현
- 상세페이지에서 장바구니 담기 클릭 시 이동 기능
- 장바구니페이지 레이아웃 구현
- **장바구니에서 수량 변경 저장 후 결제하기 이동 기능**


## 🔧 사용된 기술 스택

- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
- ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 🔧 사용된 툴

- <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /> : API 문서화 및 설계
- <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/> : SCRUM 기반 개발을 위한 팀 협업 도구
- <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/> : 프로젝트 버젼 관리
- <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> : 프로젝트 버젼 관리
- <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /> : 팀 내 의사소통
- <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/> : IDE

## ✏️ References

- 이 프로젝트는 카카오 프렌즈 골프를 참고하여 학습용으로 작업 되었습니다.
- 이 프로젝트에서 사용된 이미지는 배포 가능한 캐릭터와 상품 이미지를 목업 제작용 사이트 [PlaceIt](https://documenter.getpostman.com/view/13584119/TzRShToH)을 통해 제작되었습니다.
- 이 프로젝트에 쓰인 상품 정보 및 개인정보는 모두 파이썬 Faker 라이브러리를 통해 만들어진 허구의 것입니다.
- 이 프로젝트의 소스 코드는 상업적으로 이용하실 수 없습니다.
