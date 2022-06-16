const placeOfOutdatedQuestionInfo = document.querySelector('.qa-a-form');
if(placeOfOutdatedQuestionInfo){
    const publishDateSpan = document.querySelector('.published > .value-title');
    const now = new Date();
    const publishDate = new Date(publishDateSpan.title);
    const publishYearOlderThanNow = publishDate.getFullYear() < now.getFullYear();
    const publishMonthNewerThanNow = publishDate.getMonth() - 1 >= now.getMonth();

    if (publishYearOlderThanNow || publishMonthNewerThanNow) {
        const outdatedQuestionInfoVisibility = placeOfOutdatedQuestionInfo.style.display === 'none' ? 'hidden' : '';
        placeOfOutdatedQuestionInfo.insertAdjacentHTML('beforebegin', 
                `<p class = "qa-outdated-question-container ${outdatedQuestionInfoVisibility}">
                    To pytanie zostało zadane już dawno temu i może być nieaktualne.<br/>
                    Upewnij się, że Twoja odpowiedź nadal będzie pomocna.
                </p>`);
    }
    const questionElemExist = document.querySelector('.qa-outdated-question-container');
    if(questionElemExist){
        const outdatedInfoContainerClassList = questionElemExist.classList;
    
        const areThereAnswersForQuestion = !CKEDITOR.instances.a_content ? true : false;
        


        document.querySelector('#q_doanswer').addEventListener('click', ()=>{
            outdatedInfoContainerClassList.contains('hidden') ? outdatedInfoContainerClassList.remove('hidden') : outdatedInfoContainerClassList.add('hidden');
            if(areThereAnswersForQuestion){
                const cancelAnswer = CKEDITOR.instances.a_content.element.$.form.docancel;
                cancelAnswer.addEventListener('click', ()=>{
                    outdatedInfoContainerClassList.contains('hidden') ? outdatedInfoContainerClassList.remove('hidden') : outdatedInfoContainerClassList.add('hidden');
                }, {once: true});
            }
        })
    }
}