const oneAudio = new Audio('./music/Billie Eilish - BIRDS OF A FEATHER.mp3');
const twoAudio = new Audio('./music/Multiverse - 有緣作伙.mp3');
const threeAudio = new Audio('./music/REX, Quanzo - 不老泉.mp3');
const fourAudio = new Audio('./music/CHROMAKOPIA - Sticky.mp3');
const fourPointFiveAudio = new Audio('./music/七里香 - 七里香.mp3');
const fiveAudio = new Audio('./music/6. OUTTABODY靈魂出竅 - CHANGE.mp3');
const sixAudio = new Audio('./music/G2SLS - 眼鏡上面標籤CARTIER.mp3');
const sevenAudio = new Audio('./music/2.Bad Habit .mp3');
const eightAudio = new Audio('./music/3.360.mp3');
const nineAudio = new Audio('./music/4.moonlight.mp3');
const tenAudio = new Audio('./music/5.No One Noticed.mp3');
const elevenAudio = new Audio('./music/6.Romantic Homicide .mp3');
const twelveAudio = new Audio('./music/7.Espresso.mp3');
const thirteenAudio = new Audio('./music/8.范特西-愛在西元前.mp3');
const fourteenAudio = new Audio('./music/is there free breakfast here_.mp3');
const fifteenAudio = new Audio('./music/10. ADICA -ADICA.mp3');
const sixteenAudio = new Audio('./music/11.髒藝術家-髒藝術家.mp3');
const seventeenAudio = new Audio('./music/12. 夢想成真-...夢中夢中夢中夢中....mp3');
const eighteenAudio = new Audio('./music/13. dancing in the kitchen.mp3');
const nineteenAudio = new Audio('./music/14. 帶光者 - 花火 Firework.mp3');
const twentyAudio = new Audio('./music/15.Money Trees.mp3');
const twentytwoAudio = new Audio('./music/16. Praise The Lord.mp3');
const twentythreeAudio = new Audio('./music/17. EARTHBOUND-Way Up.mp3');
const twentyfourAudio = new Audio('./music/18. we can_t be friends.mp3');
const twentyfiveAudio = new Audio('./music/19. family ties.mp3');
const twentysixAudio = new Audio('./music/20. You Can Take Me High.mp3');
const twentysevenAudio = new Audio('./music/21. 姚中二 - NFT.mp3');
const twentyeightAudio = new Audio('./music/22. LUNARFACE - 紫花海.mp3');

const nextBtn = document.querySelector('.next');
const albumName = document.querySelector('.album-name')

const cdImage = document.querySelector('.cd-img'); // 新增抓取 CD 圖片的元素
//birdOfFeatherAudio.play();

const cdImages = [
    './images/AlbumCover/Cover-02.png',
    './images/AlbumCover/Cover-03.png',
    './images/AlbumCover/Cover-04.png',
    './images/AlbumCover/Cover-05.png',
    './images/AlbumCover/Cover-06.png',
    './images/AlbumCover/Cover-07.png',
    './images/AlbumCover/Cover-08.png',
    './images/AlbumCover/Cover-09.png',
    './images/AlbumCover/Cover-10.png',
    './images/AlbumCover/Cover-11.png',
    './images/AlbumCover/Cover-12.png',
    './images/AlbumCover/Cover-13.png',
    './images/AlbumCover/Cover-14.png',
    './images/AlbumCover/Cover-15.png',
    './images/AlbumCover/Cover-16.png',
    './images/AlbumCover/Cover-17.png',
    './images/AlbumCover/Cover-18.png',
    './images/AlbumCover/Cover-19.png',
    './images/AlbumCover/Cover-20.png',
    './images/AlbumCover/Cover-21.png',
    './images/AlbumCover/Cover-22.png',
    './images/AlbumCover/Cover-23.png',
    './images/AlbumCover/Cover-24.png',
    './images/AlbumCover/Cover-25.png',
    './images/AlbumCover/Cover-26.png',
    './images/AlbumCover/Cover-27.png',
    './images/AlbumCover/Cover-28.png',
    './images/AlbumCover/Cover-29.png'
    // 根據專輯數量加入更多圖片路徑
];

const songs = [
    { ele: oneAudio, albumName: 'HIT ME HARD AND SOFT - BIRDS OF FEATHER' },
    { ele: twoAudio, albumName: '破籠 - 有緣作伙' },
    { ele: threeAudio, albumName: 'MEAL NO.06 - 不老泉' },
    { ele: fourAudio, albumName: 'CHROMAKOPIA - Sticky' },
    { ele: fourPointFiveAudio, albumName: '七里香 - 七里香' },
    { ele: fiveAudio, albumName: 'OUTTABODY靈魂出竅 - CHANGE' },
    { ele: sixAudio, albumName: 'G2SLS - 眼鏡上面標籤CARTIER' },
    { ele: sevenAudio, albumName: 'Static - Bad Habit' },
    { ele: eightAudio, albumName: 'Brat - 360' },
    { ele: nineAudio, albumName: 'rapunzel - moonlight' },
    { ele: tenAudio, albumName: 'submarine - No One Noticed' },
    { ele: elevenAudio, albumName: 'Petals to Thorns - Romantic Homicide' },
    { ele: twelveAudio, albumName: "Short n'Sweet - Espresso"},
    { ele: thirteenAudio, albumName: '范特西 - 愛在西元前' },
    { ele: fourteenAudio, albumName: 'Ugly duck - is there free breakfast here' },
    { ele: fifteenAudio, albumName: 'ADICA - ADICA' },
    { ele: sixteenAudio, albumName: '髒藝術家 - 髒藝術家' },
    { ele: seventeenAudio, albumName: '夢想成真 - ...夢中夢中夢中夢中...' },
    { ele: eighteenAudio, albumName: 'ggbbxx - dancing in the kitchen' },
    { ele: nineteenAudio, albumName: '帶光者 - 花火' },
    { ele: twentyAudio, albumName: 'good kid,m.A.A.d city - Money Trees' },
    { ele: twentytwoAudio, albumName: 'TESTING - Praise The Lord' },
    { ele: twentythreeAudio, albumName: 'EARTHBOUND - Way Up' },
    { ele: twentyfourAudio, albumName: 'eternal sunshine - we cant be friends' },
    { ele: twentyfiveAudio, albumName: 'The Melodic Blue - family ties' },
    { ele: twentysixAudio, albumName: 'Dream - You Can Take Me High' },
    { ele: twentysevenAudio, albumName: '姚中二 - NFT' },
    { ele: twentyeightAudio, albumName: 'LUNARFACE - 紫花海' }
]

let current = 0;
let currentSong = songs[current].ele;
albumName.textContent = songs[current].albumName;
currentSong.play();

cdImage.src = cdImages[current]; // 初始化第一張 CD 圖片

nextBtn.addEventListener('click', () => {
    // 暫停當前歌曲並重設播放進度
    currentSong.pause();
    currentSong.currentTime = 0;

    // 切換到下一首歌曲
    current = (current + 1) % songs.length; // 確保在歌曲陣列內循環
    currentSong = songs[current].ele;
    
    // 更新專輯名稱並播放新的歌曲
    albumName.textContent = songs[current].albumName;
    currentSong.play();

    cdImage.src = cdImages[current]; // 更新 CD 圖片
})

