export const priceList = [
  {
    type: "일반",
    list: [
      {
        numType: true,
        title: "기본 촬영 요금",
        setUnit: "분",
        inputUnit: "원",
      },
      {
        numType: false,
        title: "촬영 인원 요금",
        setUnit: "1인 당",
        inputUnit: "원",
      },
      {
        numType: true,
        title: "추가 촬영 요금",
        setUnit: "분",
        inputUnit: "원",
      },
    ],
  },
  {
    type: "베이비/주니어",
    list: [
      {
        numType: true,
        title: "기본 촬영 요금",
        setUnit: "분",
        inputUnit: "원",
      },
      {
        numType: false,
        title: "촬영 인원 요금",
        setUnit: "1인 당",
        inputUnit: "원",
      },
      {
        numType: true,
        title: "추가 촬영 요금",
        setUnit: "분",
        inputUnit: "원",
      },
    ],
  },
  {
    type: "행사",
    list: [
      {
        numType: true,
        title: "기본 촬영 요금",
        setUnit: "분",
        inputUnit: "원",
      },
      {
        numType: true,
        title: "추가 촬영 요금",
        setUnit: "분",
        inputUnit: "원",
      },
    ],
  },
];

export const amountList = [
  {
    type: "raw",
    list: [
      {
        title: "원본사진 제공량",
        setUnit: "최소 40장",
        inputUnit: "장",
      },
      {
        title: "정밀 보정본 제공량",
        setUnit: "최소 3장",
        inputUnit: "장",
      },
    ],
  },
  {
    type: "retouch",
    list: [
      {
        title: "색감보정 제공량",
        setUnit: "최소 20장",
        inputUnit: "장",
      },
      {
        title: "정밀 보정본 제공량",
        setUnit: "최소 3장",
        inputUnit: "장",
      },
    ],
  },
];
