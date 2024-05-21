// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    { "number": 1, "message": "짝이 마음에 들지 않았던 경험과 그 상황에 대해 어떻게 대처했는지에대해 나누어 봅시다" },
    { "number": 2, "message": "주인공에 대해 주변 친구들이 표현하던 '진지충', '선비질'에 대한 생각을 공유해봅시다." },
    { "number": 3, "message": "주인공은 자신과 친한 친구들이 싫어하는 친구와 모둠이 되어 과제를 하기 위해 모이는 것에 대해 자신의 가장 친한 친구들의 승인을 받아야 한다고 합니다. 이에 대한 생각을 공유해봅시다." },
    { "number": 4, "message": "나의 친구들이 싫어하는 친구가 사실 괜찮은 친구일지도 모른다는 생각이 들었을 때, 나는 어떻게 대처할 것인지에 대해 적어봅시다." },
    { "number": 5, "message": "설아와의 대화 중 친구들이 은유를 싫어하는 이유를 알 수 있었습니다. 과연 은유는 정말 이중적인 아이인 것일까요? 지금까지 읽은 내용을 바탕으로 이에 대해 추측해봅시다." },
    { "number": 6, "message": "어머니가 돌아가신 은유, 아버지가 돌아가신 주인공은 마음 속 켜켜이 쌓인 그리움을 가지고 있다. 나는 어떤 켜켜이 쌓인 것을 가지고 있는지 적어봅시다." },
    { "number": 7, "message": "지금까지 이야기를 읽으면서 가장 친해지고 싶은 등장인물과 그렇지 않은 등장인물을 각각 한명씩 골라 적고, 그 이유에 대해 적어봅시다." },
    { "number": 8, "message": "주인공이 좋아하는 '현우'가 주인공에게 따로 인사를 한 것에 의미가 있을지 토의해봅시다." },
    { "number": 9, "message": "은유에 대한 친구들의 오해를 풀어주고자 주인공은 설아에게 은유에 대한 이야기를 했습니다. 만일 내가 은유였더라면 어떻게 했을지 적어봅시다." },
    { "number": 10, "message": "이번 챕터를 읽고 드는 생각들을 주제 상관 없이 자유롭게 적어봅시다." },
    { "number": 11, "message": "주인공의 진짜 친구라고 할 수 있는 인물들은 누구라고 할 수 있을지 생각해봅시다. 그리고 그 이유도 간단하게 적어봅시다." },
    { "number": 12, "message": "혼자만의 시간에 나는 무엇을 하는지 공유해봅시다." },
    { "number": 13, "message": "주인공이 어머니에게 '아람'이에 대한 이야기를 전해 듣습니다. 나라면 아람이에 대해 어떻게 생각했을지 적어봅시다." },
    { "number": 14, "message": "책을 읽으면서 느낀 것들을 생각하면서 '친구'란 무엇일지에 대해 적어보고, 그 내용을 공유해봅시다." }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
    door.addEventListener('click', () => {
        // 상위 div의 class 번호를 찾아서 image url에 사용합니다
        const imageUrl = `image/az/a-${index + 1}.jpeg`;

        // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
        const doorDiv = document.querySelector(`.day-${index + 1}`)
        const backDiv = doorDiv.querySelector(`.back`);

        const style = window.getComputedStyle(backDiv);
        const pTag = backDiv.querySelector('p')
        const text = modalMessageList[index]['message']

        // showModal 함수를 호출하여 모달을 표시합니다.
        showModal(imageUrl, text);
        // alert('이벤트 캘린더를 엽니다.');
    });
});