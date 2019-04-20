let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function() {
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentMail = document.getElementById('comment-mail');
    let commentText = document.getElementById('comment-text');

  let comment = {
      name: commentName.value,
      mail: commentMail.value,
      text: commentText.value,
      time: Math.floor(Date.now()/1000)
    }
    commentName.value = '';
    commentMail.value = '';
    commentText.value = '';
    comments.push(comment);
    saveComments();
    showCommants();
}

function saveComments(){
localStorage.setItem('comments', JSON.stringify(comments));
  }

function loadComments(){
      if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
      showComments();
}
function showComments(){
    let commentField = document.getElementById('comment-field');
    let out = '';
     comments.forEach(function(item){
          out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
          out += `<p class="alert alert-primary">${item.name}</p>`;
          out += `<p class="alert alert-success">${item.text}</p>`;
     });
     commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHour();
    let min = a.getMinutes();
    let sec = a.getSecond();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
}
