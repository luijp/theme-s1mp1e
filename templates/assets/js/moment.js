const triggerMoment = (ele)=>{
    const momentDiv = ele.parentElement.nextElementSibling;
    if(momentDiv.style.display !== 'block'){
        momentDiv.style.display = 'block';
    }else{
        momentDiv.style.display = 'none';
    }

}

const vote  = (ele)=>{
    const abbr = ele.getAttribute('id');
    const xhr = new XMLHttpRequest();
    ele.classList.add('active');

    const likeCountEle = ele.querySelector('span');
    const like = parseInt(likeCountEle.innerText) + 1;
    likeCountEle.innerText = like.toString();

    xhr.open("POST", "/apis/api.halo.run/v1alpha1/trackers/upvote");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
        JSON.stringify({
            group: 'moment.halo.run',
            plural: 'moments',
            name: abbr,
        }));
}